const statuses = require("libs/statuses")
const refresh = require("libs/refresh")

const dynami = extendContent(UnitType, "dynami", {});
dynami.constructor = () => extend(UnitEntity, {
});

const kopis = extendContent(UnitType, "kopis", {});
kopis.constructor = () => extend(MechUnit, {
});

Events.on(ClientLoadEvent, b  => {
   dynami.immunities.add(statuses.theraStatus);
   dynami.immunities.add(statuses.lathraStatus);
   dynami.abilities.add(new StatusFieldAbility(statuses.dynamiStatus, 180, 60, 80));
   kopis.weapons.get(0).shootStatus = statuses.frenzyStatus;
   kopis.weapons.get(0).shootStatusDuration = 120;
   kopis.weapons.get(1).shootStatus = statuses.frenzyStatus;
   kopis.weapons.get(1).shootStatusDuration = 120;
});