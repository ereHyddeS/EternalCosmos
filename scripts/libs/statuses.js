//referencing pixelcraft's format
//thera status effect
const theraStatus = extend(StatusEffect, "theraStatus", {
    localizedName: "Thera Faction",
    speedMultiplier: 1.2,
    healthMultiplier: 1.4,
    buildSpeedMultiplier: 1.5
    damage: -0.4
});

module.exports = {
    theraStatus: theraStatus
};