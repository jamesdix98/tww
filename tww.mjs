import { SystemActor } from "./module/documents.mjs";
import { PlayerModel } from "./module/data-models.mjs";
import { PlayerSheet } from "./module/player-sheet.mjs";

Hooks.once("init", () => {
    
    CONFIG.Actor.documentClass = SystemActor;

    CONFIG.Actor.dataModels = {
        Player: PlayerModel
    };

    CONFIG.Actor.trackableAttributes = {
        Player: {
            bar: ["resources.health"]
        }
    }

    Actors.unregisterSheet("core", ActorSheet);

    Actors.registerSheet("tww", PlayerSheet, {
        types: ["Player"],
        makeDefault: true
    });

    Handlebars.registerHelper("signed", function(value) {
        return value >= 0 ? `+${value}` : `${value}`;
    });

});

Hooks.once("ready", () => {
    const actorName = "test";

    const actor = game.actors.getName(actorName);

    if (!actor) {
        ui.notifications.warn(`Could not find actor: ${actorName}`);
        return;
    }

    actor.sheet.render(true);
});

Hooks.on("renderChatMessage", (message, html) => {
    const resultClass = message.flags?.tww?.resultClass;

    if (!resultClass) return;

    html.find(".dice-total").addClass(resultClass);
});