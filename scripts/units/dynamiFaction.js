const statuses = require("libs/cosmicstatuses")
const refresh = require("libs/cosmicrefresh")

const dynami = extendContent(UnitType, "dynami", {});
dynami.constructor = () => extend(UnitEntity, {
});

const kopis = extendContent(UnitType, "kopis", {});
kopis.constructor = () => extend(MechUnit, {
});

const xiphos = extendContent(UnitType, "xiphos", {});
xiphos.constructor = () => extend(MechUnit, {
});

Events.on(ClientLoadEvent, b  => {
   dynami.immunities.add(statuses.theraStatus);
   dynami.immunities.add(statuses.lathraStatus);
   dynami.abilities.add(new StatusFieldAbility(statuses.dynamiStatus, 180, 60, 80));
   kopis.abilities.add(new StatusFieldAbility(statuses.frenzyStatus, 100, 200, 0));
   xiphos.abilities.add(new StatusFieldAbility(statuses.frenzyStatus, 150, 250, 0));
});