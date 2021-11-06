const statuses = require("libs/cosmicstatuses")
const refresh = require("libs/cosmicrefresh")

const lathra = extendContent(UnitType, "lathra", {});
lathra.constructor = () => extend(UnitEntity, {
});
Events.on(ClientLoadEvent, b  => {
   lathra.immunities.add(statuses.dynamiStatus);
   lathra.immunities.add(statuses.theraStatus);
   lathra.weapons.get(0).shootStatus = StatusEffects.invincible;
   lathra.weapons.get(0).shootStatusDuration = 60;
   lathra.abilities.add(new StatusFieldAbility(statuses.lathraStatus, 180, 60, 80));
});