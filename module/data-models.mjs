const { HTMLField, NumberField, SchemaField, StringField, BooleanField } = foundry.data.fields;

class ActorDataModel extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    // All Actors have resources.
    return {
        proficiency: new NumberField({ required: true, integer: true, min: 0, initial: 2}), 
        attributes: new SchemaField({
            strength: new NumberField({ required: true, integer: true, min: -5, initial: 0}),
            agility: new NumberField({ required: true, integer: true, min: -5, initial: 0}),
            health: new NumberField({ required: true, integer: true, min: -5, initial: 0}),
            intelligence: new NumberField({ required: true, integer: true, min: -5, initial: 0}),
            wisdom: new NumberField({ required: true, integer: true, min: -5, initial: 0}),
            presence: new NumberField({ required: true, integer: true, min: -5, initial: 0}),
        }),
        saves: new SchemaField({
            strength: new SchemaField({
                attribute: new StringField({ initial: 'strength' }),
                proficient: new BooleanField({ initial: false }),
                misc: new NumberField({ required: true, integer: true, initial: 0 })
            }),
            agility: new SchemaField({
                attribute: new StringField({ initial: 'agility' }),
                proficient: new BooleanField({ initial: false }),
                misc: new NumberField({ required: true, integer: true, initial: 0 })
            }),
            health: new SchemaField({
                attribute: new StringField({ initial: 'health' }),
                proficient: new BooleanField({ initial: false }),
                misc: new NumberField({ required: true, integer: true, initial: 0 })
            }),
            intelligence: new SchemaField({
                attribute: new StringField({ initial: 'intelligence' }),
                proficient: new BooleanField({ initial: false }),
                misc: new NumberField({ required: true, integer: true, initial: 0 })
            }),
            wisdom: new SchemaField({
                attribute: new StringField({ initial: 'wisdom' }),
                proficient: new BooleanField({ initial: false }),
                misc: new NumberField({ required: true, integer: true, initial: 0 })
            }),
            presence: new SchemaField({
                attribute: new StringField({ initial: 'presence' }),
                proficient: new BooleanField({ initial: false }),
                misc: new NumberField({ required: true, integer: true, initial: 0 })
            }) 
        }),
        resources: new SchemaField({
            health: new SchemaField({
                temp: new NumberField({ required: true, integer: true, min: 0, initial: 0 }),
                current: new NumberField({ required: true, integer: true, min: 0, initial: 10 }),
                max: new NumberField({ required: true, integer: true, min: 0, initial: 10 })
            })
        }),
        skills: new SchemaField({
            athletics: new SchemaField({
                attribute: new StringField({ initial: 'strength' }),
                proficient: new BooleanField({ initial: false }),
                expertise: new BooleanField({ initial: false }),
                misc: new NumberField({ required: true, integer: true, initial: 0 })
            }),
            acrobatics: new SchemaField({
                attribute: new StringField({ initial: 'agility' }),
                proficient: new BooleanField({ initial: false }),
                expertise: new BooleanField({ initial: false }),
                misc: new NumberField({ required: true, integer: true, initial: 0 })
            }),
            legerdemain: new SchemaField({
                attribute: new StringField({ initial: 'agility' }),
                proficient: new BooleanField({ initial: false }),
                expertise: new BooleanField({ initial: false }),
                misc: new NumberField({ required: true, integer: true, initial: 0 })
            }),
            stealth: new SchemaField({
                attribute: new StringField({ initial: 'agility' }),
                proficient: new BooleanField({ initial: false }),
                expertise: new BooleanField({ initial: false }),
                misc: new NumberField({ required: true, integer: true, initial: 0 })
            }),
            arcana: new SchemaField({
                attribute: new StringField({ initial: 'intelligence' }),
                proficient: new BooleanField({ initial: false }),
                expertise: new BooleanField({ initial: false }),
                misc: new NumberField({ required: true, integer: true, initial: 0 })
            }),
            history: new SchemaField({
                attribute: new StringField({ initial: 'intelligence' }),
                proficient: new BooleanField({ initial: false }),
                expertise: new BooleanField({ initial: false }),
                misc: new NumberField({ required: true, integer: true, initial: 0 })
            }),
            investigation: new SchemaField({
                attribute: new StringField({ initial: 'intelligence' }),
                proficient: new BooleanField({ initial: false }),
                expertise: new BooleanField({ initial: false }),
                misc: new NumberField({ required: true, integer: true, initial: 0 })
            }),
            medicine: new SchemaField({
                attribute: new StringField({ initial: 'intelligence' }),
                proficient: new BooleanField({ initial: false }),
                expertise: new BooleanField({ initial: false }),
                misc: new NumberField({ required: true, integer: true, initial: 0 })
            }),
            religion: new SchemaField({
                attribute: new StringField({ initial: 'intelligence' }),
                proficient: new BooleanField({ initial: false }),
                expertise: new BooleanField({ initial: false }),
                misc: new NumberField({ required: true, integer: true, initial: 0 })
            }),
            animal_handling: new SchemaField({
                attribute: new StringField({ initial: 'wisdom' }),
                proficient: new BooleanField({ initial: false }),
                expertise: new BooleanField({ initial: false }),
                misc: new NumberField({ required: true, integer: true, initial: 0 })
            }),
            environment: new SchemaField({
                attribute: new StringField({ initial: 'wisdom' }),
                proficient: new BooleanField({ initial: false }),
                expertise: new BooleanField({ initial: false }),
                misc: new NumberField({ required: true, integer: true, initial: 0 })
            }),
            insight: new SchemaField({
                attribute: new StringField({ initial: 'wisdom' }),
                proficient: new BooleanField({ initial: false }),
                expertise: new BooleanField({ initial: false }),
                misc: new NumberField({ required: true, integer: true, initial: 0 })
            }),
            perception: new SchemaField({
                attribute: new StringField({ initial: 'wisdom' }),
                proficient: new BooleanField({ initial: false }),
                expertise: new BooleanField({ initial: false }),
                misc: new NumberField({ required: true, integer: true, initial: 0 })
            }),
            deception: new SchemaField({
                attribute: new StringField({ initial: 'presence' }),
                proficient: new BooleanField({ initial: false }),
                expertise: new BooleanField({ initial: false }),
                misc: new NumberField({ required: true, integer: true, initial: 0 })
            }),
            intimidation: new SchemaField({
                attribute: new StringField({ initial: 'presence' }),
                proficient: new BooleanField({ initial: false }),
                expertise: new BooleanField({ initial: false }),
                misc: new NumberField({ required: true, integer: true, initial: 0 })
            }),
            performance: new SchemaField({
                attribute: new StringField({ initial: 'presence' }),
                proficient: new BooleanField({ initial: false }),
                expertise: new BooleanField({ initial: false }),
                misc: new NumberField({ required: true, integer: true, initial: 0 })
            }),
            persuasion: new SchemaField({
                attribute: new StringField({ initial: 'presence' }),
                proficient: new BooleanField({ initial: false }),
                expertise: new BooleanField({ initial: false }),
                misc: new NumberField({ required: true, integer: true, initial: 0 })
            }),
        })
    };
  }

  getSkillBonus(skill) {

    const skillData = this.skills[skill];

    let bonus = this.attributes[skillData.attribute];

    if (skillData.proficient) {
        bonus += this.proficiency;
    }

    if (skillData.expertise) {
        bonus += this.proficiency;
    }

    bonus += skillData.misc;

    return bonus;
  }

  getSaveBonus(save) {

    const saveData = this.saves[save];

    let bonus = this.attributes[saveData.attribute];

    if (saveData.proficient) {
        bonus += this.proficiency;
    }
    bonus += saveData.misc;

    return bonus;
  }

}

export class PlayerModel extends ActorDataModel {
    static defineSchema() {
        return {
            ...super.defineSchema(),
            level: new NumberField({ required: true, integer: true, positive: true, initial: 2 })
        };
    }
}