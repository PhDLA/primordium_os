const engine = require("../pipeline/engine_pipeline.js");
const modulePipe = require("../pipeline/module_pipeline.js");
const ui = require("../pipeline/ui_pipeline.js");

module.exports = {
    async run(input) {
        console.log("[APP] Runtime started");

        const engineOut = engine.process(input);
        const moduleOut = await modulePipe.process(engineOut);

        ui.display(moduleOut);

        // --- SEND TO WEBSOCKET ---
        if (global.PRIMORDIUM_WS) {
            global.PRIMORDIUM_WS.send(moduleOut);
        }

        console.log("[APP] Runtime finished");
    }
};

