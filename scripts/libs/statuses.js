//referencing pixelcraft's format
//dynami status effect
const dynamiStatus = extend(StatusEffect, "dynamiStatus", {
    localizedName: "Dynami Faction",
    damageMultiplier: 1.55,
    armorMultiplier: 1.5,
    reloadMultiplier: 1.25
});

//thera status effect
const theraStatus = extend(StatusEffect, "theraStatus", {
    localizedName: "Thera Faction",
    speedMultiplier: 1.2,
    healthMultiplier: 1.3,
    buildSpeedMultiplier: 1.5,
    damage: -0.4
});

//lathra status effect
const lathraStatus = extend(StatusEffect, "lathraStatus", {
    localizedName: "Lathra Faction",
    damageMultiplier: 1.3,
    speedMultiplier: 1.5,
    reloadMultiplier: 1.5
});

//halting status effect
const haltingStatus = extend(StatusEffect, "haltingStatus", {
    localizedName: "Halting",
    speedMultiplier: 0,
    dragMultiplier: 4
});

//Note to self: ADD COMMA
module.exports = {
    dynamiStatus: dynamiStatus,
    theraStatus: theraStatus,
    lathraStatus: lathraStatus,
    haltingStatus: haltingStatus
};