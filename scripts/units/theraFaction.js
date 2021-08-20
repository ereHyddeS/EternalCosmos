const statuses = require("libs/statuses")
const refresh = require("libs/refresh")

const thera = extendContent(UnitType, "thera", {});
thera.constructor = () => extend(UnitEntity, {
});
Events.on(ClientLoadEvent, b  => {
   thera.immunities.add(statuses.dynamiStatus);
   thera.immunities.add(statuses.lathraStatus);
   thera.weapons.get(0).shootStatus = statuses.haltingStatus;
   thera.weapons.get(0).shootStatusDuration = 45;
   thera.weapons.get(1).shootStatus = statuses.haltingStatus;
   thera.weapons.get(1).shootStatusDuration = 45;
   thera.abilities.add(new StatusFieldAbility(statuses.theraStatus, 180, 60, 80));
});