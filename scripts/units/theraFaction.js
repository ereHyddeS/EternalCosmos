const statuses = require("libs/statuses")

const thera = extendContent(UnitType, "thera", {});
thera.abilities.add(new StatusFieldAbility(theraStatus, 300, 300, 80));

