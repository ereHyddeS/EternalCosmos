const statuses = require("libs/statuses")
const refresh = require("libs/refresh")

const dynami = extendContent(UnitType, "dynami", {});
dynami.constructor = () => extend(UnitEntity, {
});
Events.on(ClientLoadEvent, b  => {
   dynami.immunities.add(statuses.theraStatus);
   dynami.abilities.add(new StatusFieldAbility(statuses.dynamiStatus, 180, 60, 80));
});