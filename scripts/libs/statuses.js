//referencing pixelcraft's format
//thera status effect
const theraStatus = extend(StatusEffect, "theraStatus", {
    localizedName: "Thera Faction",
    speedMultiplier: 1.2,
    healthMultiplier: 1.4,
    buildSpeedMultiplier: 1.5,
    damage: -0.4
});

//dynami status effect
const dynamiStatus = extend(StatusEffect, "dynamiStatus", {
    localizedName: "Dynami Faction",
    damageMultiplier: 1.3,
    armorMultiplier: 1.5,
    reloadMultiplier: 1.1
});

//Note to self: ADD COMMA
module.exports = {
    theraStatus: theraStatus,
    dynamiStatus: dynamiStatus
};