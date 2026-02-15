const core = require("./core/app_core.js");
const runtime = require("./runtime/app_runtime.js");
const ui = require("./ui/app_ui.js");
const boot = require("./runtime/boot_sequence.js");

module.exports = {
    async start() {
        console.log("=== PRIMORDIUM APPLICATION START ===");

        core.init();
        ui.start();

        // --- BOOT SEQUENCE ---
        for (const line of boot) {
            await runtime.run(line);
            await new Promise(r => setTimeout(r, 120)); // 300ms delay
        }

        console.log("=== PRIMORDIUM APPLICATION END ===");
    }
};
