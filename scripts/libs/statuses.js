//referencing pixelcraft's format
//thera status effect
const theraStatus = extend(StatusEffect, "thera-status", {
    isHidden(){
        return false
    },
    localizedName: "Thera",
    speedMultiplier: 1.2,
    healthMultiplier: 1.4
    damage: -10
});