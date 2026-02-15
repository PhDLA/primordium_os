const engine = require("../pipeline/engine_pipeline.js");
const modulePipe = require("../pipeline/module_pipeline.js");
const ui = require("../pipeline/ui_pipeline.js");

module.exports = {
    async run(input) {
        console.log("[APP] Runtime started");

        const engineOut = engine.process(input);
        const moduleOut = await modulePipe.process(engineOut);

        // CSAK EZ KELL
        ui.display(moduleOut);

        console.log("[APP] Runtime finished");
    }
};
