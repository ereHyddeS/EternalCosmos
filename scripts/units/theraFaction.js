const statuses = require("libs/statuses")
const refresh = require("libs/refresh")

const thera = extendContent(UnitType, "thera", {});
thera.constructor = () => extend(UnitEntity, {
});
Events.on(ClientLoadEvent, b  => {
thera.abilities.add(new StatusFieldAbility(statuses.theraStatus, 300, 300, 80));
});
