const statuses = require("libs/statuses")

//thera status effect
const theraStatus = extend(StatusEffect, "theraStatus", {
    localizedName: "Thera Faction",
    speedMultiplier: 1.2,
    healthMultiplier: 1.4
    damage: -10
});

Events.on(ClientLoadEvent, b  => {
   thera.abilities.add(new StatusFieldAbility(theraStatus, 300, 300, 80));
});