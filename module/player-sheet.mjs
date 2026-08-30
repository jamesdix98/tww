export class PlayerSheet extends ActorSheet {

    static get defaultOptions() {
        return foundry.utils.mergeObject(super.defaultOptions, {
            template: "systems/tww/templates/player-sheet.hbs",
            width: 580,
            height: 660,
            resizable: true
        });
    }

    setPosition(position = {}) {
        if (position.width !== undefined) {
            position.width = Math.max(position.width, 450);
            position.width = Math.min(position.width, 700);
        }

        if (position.height !== undefined) {
            position.height = Math.max(position.height, 500);
            position.height = Math.min(position.height, 660);
        }

        return super.setPosition(position);
    }

    getData() {
        const context = super.getData();

        /* DUMMY DATA */
            this.actor.system.attributes.agility = 5;
            this.actor.system.saves.agility.proficient = true;
            this.actor.system.skills.stealth.expertise = true;
            this.actor.system.skills.athletics.proficient = true;
            this.actor.system.proficiency = 5;

        context.system = this.actor.system;

        // calculate saves

        for (const save of Object.keys(context.system.saves)) {
            context.system.saves[save].bonus =
                this.actor.system.getSaveBonus(save);
        }

        // calculate skills

        for (const skill of Object.keys(context.system.skills)) {
            context.system.skills[skill].bonus =
                this.actor.system.getSkillBonus(skill);
        }

        const skills = context.system.skills;

        context.skillSections = {
            strength: [],
            agility: [],
            health: [],
            intelligence: [],
            wisdom: [],
            presence: []
        };

        for (const [key, skill] of Object.entries(skills)) {
            if (context.skillSections[skill.attribute]) {
                context.skillSections[skill.attribute].push({
                    key,
                    name: key.replace(/_/g, ' ').replace(/^./, char => char.toUpperCase()),
                    ...skill
                });
            }
        }

        console.warn('context.skillSections:', context.skillSections["strength"]);

        console.warn('context:', context.system)

        return context;
    }

    activateListeners(html) {
        super.activateListeners(html);

        html.find(".rollable").click(this._onRoll.bind(this));

        html.find('[data-action="hp-current"]').click(() => {
            const dialog = html.find('[data-dialog="current"]');

            dialog.removeClass("hidden");

            dialog.find(".hp-amount").val("").focus();
        });

        html.find('[data-action="hp-temp"]').click(() => {
            const dialog = html.find('[data-dialog="temp"]');

            dialog.removeClass("hidden");

            dialog.find(".hp-amount").val("").focus();
        });

        html.find('[data-dialog="temp"] .hp-amount').keydown((event) => {
            if (event.key === "Enter") {
                event.preventDefault();

                this.addTempHP(html);
            }
        });

        html.find('[data-action="close-dialog"]').click((event) => {
            $(event.currentTarget)
                .closest(".hp-dialog")
                .addClass("hidden");
        });

        html.find('[data-action="heal"]').click(() => {
            this.healHP(html);
        });

        html.find('[data-action="damage"]').click(() => {
            this.damageHP(html);
        });

        html.find('[data-action="add-temp"]').click(() => {
            this.addTempHP(html);
        });

        html.find('[data-action="toggle-edit"]').click(() => {
            this.toggleEditMode(html);
        });
    }

    async healHP(html) {
        const dialog = html.find('[data-dialog="current"]');
        const amount = Number(dialog.find(".hp-amount").val());

        if (!amount || amount <= 0) return;

        const hp = this.actor.system.resources.health;

        const newHP = Math.min(
            hp.current + amount,
            hp.max
        );

        await this.actor.update({
            "system.resources.health.current": newHP
        });

        dialog.addClass("hidden");
        dialog.find(".hp-amount").val("");
    }

    async damageHP(html) {
        const dialog = html.find('[data-dialog="current"]');
        const amount = Number(dialog.find(".hp-amount").val());

        if (!amount || amount <= 0) return;

        const hp = this.actor.system.resources.health;

        let damage = amount;
        let temp = hp.temp;
        let current = hp.current;

        // Temp HP absorbs damage first
        if (temp > 0) {
            const absorbed = Math.min(temp, damage);

            temp -= absorbed;
            damage -= absorbed;
        }

        // Remaining damage goes to current HP
        current = Math.max(0, current - damage);

        await this.actor.update({
            "system.resources.health.current": current,
            "system.resources.health.temp": temp
        });

        dialog.addClass("hidden");
        dialog.find(".hp-amount").val("");
    }

    async addTempHP(html) {
        const dialog = html.find('[data-dialog="temp"]');
        const amount = Number(dialog.find(".hp-amount").val());

        if (!amount || amount <= 0) return;

        const hp = this.actor.system.resources.health;

        const newTemp = hp.temp + amount;

        await this.actor.update({
            "system.resources.health.temp": newTemp
        });

        dialog.addClass("hidden");
        dialog.find(".hp-amount").val("");
    }
    
    async _onRoll(event) {
        const button = event.currentTarget;

        const rollType = button.dataset.type;
        const rollName = button.dataset.roll;

        let formula;
        let label;

        if (rollType === "attribute") {
            formula = `1d20 + ${this.actor.system.attributes[rollName]}`;
            label = rollName;
        }

        if (rollType === "skill") {
            const bonus = this.actor.system.getSkillBonus(rollName);
            formula = `1d20 + ${bonus}`;
            label = rollName;
        }

        if (rollType === "save") {
            const bonus = this.actor.system.getSaveBonus(rollName);
            formula = `1d20 + ${bonus}`;
            label = rollName;
        }

        let flavourText = `${this.actor.name} rolled `;

        const article = /^[aeiou]/i.test(label) ? "an" : "a";
        flavourText += `${article} `;
        flavourText += `${label.replace("_", " ")} `;

        switch (rollType) {
            case "save":
                flavourText += "saving throw.";
                break;
            default:
                flavourText += "check.";
                break;
        }

        const roll = await new Roll(formula).evaluate();

        const d20_roll = roll.dice[0].results[0].result;

        let resultClass = "";

        if (d20_roll === 20) {
            resultClass = "critical-roll";
        } else if (d20_roll === 1) {
            resultClass = "fumble-roll";
        }

        await roll.toMessage({
            speaker: ChatMessage.getSpeaker({ actor: this.actor }),
            flavor: `${flavourText}<br>d20: ${d20_roll}`,
            flags: {
                tww: {
                    resultClass: resultClass
                }
            }
        });
    }

    toggleEditMode(html) {

        const normalView = html.find('[data-view="normal"]');
        const editView = html.find('[data-view="edit"]');

        normalView.toggleClass("hidden");
        editView.toggleClass("hidden");
    }

    async _updateObject(event, formData) {
        return this.actor.update(formData);
    }
}