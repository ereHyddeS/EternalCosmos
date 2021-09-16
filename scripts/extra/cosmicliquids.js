const statuses = require("libs/cosmicstatuses")
const refresh = require("libs/cosmicrefresh")

Events.on(ClientLoadEvent, b  => {
   liquid-vitriol.effect = statuses.dissolvingStatus;
});