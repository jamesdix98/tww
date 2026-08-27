export class PlayerSheet extends ActorSheet {

    static get defaultOptions() {
        return foundry.utils.mergeObject(super.defaultOptions, {
            template: "systems/tww/templates/player-sheet.hbs",
            width: 600,
            height: 500
        });
    }

    getData() {
        const context = super.getData();

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

        console.warn('context:', context.system)

        return context;
    }

    activateListeners(html) {
        super.activateListeners(html);

        html.find(".rollable").click(this._onRoll.bind(this));
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
        
        // calculate 'a' or 'an'
        const article = /^[aeiou]/i.test(label) ? "an" : "a";
        flavourText += `${article} `;

        // label
        flavourText += `${label.replace("_", " ")} `;

        // change 'check' to 'saving throw'
        switch (rollType)
        {
            //case "attribute": flavourText += 'check.'; break;
            //case "skill": flavourText += 'check.'; break;
            case "save": flavourText += 'saving throw.'; break;
            default: flavourText += 'check.'; break;
        }

        const roll = await new Roll(formula).evaluate();

        const d20_roll = roll.dice[0].results[0].result;

        console.log(d20_roll);

        roll.toMessage({
            speaker: ChatMessage.getSpeaker({ actor: this.actor }),
            flavor: `${flavourText}<br>d20: ${d20_roll}`
        });
    }

    async _updateObject(event, formData) {
        return this.actor.update(formData);
    }
}