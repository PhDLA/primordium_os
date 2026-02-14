const core = require("./core/app_core.js");
const runtime = require("./runtime/app_runtime.js");
const ui = require("./ui/app_ui.js");

(async () => {
    console.log("=== PRIMORDIUM APPLICATION START ===");

    core.init();
    ui.start();

    await runtime.run("hello primordium");

    console.log("=== PRIMORDIUM APPLICATION END ===");
})();
