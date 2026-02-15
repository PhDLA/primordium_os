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
        for (const step of boot) {

            if (step.type === "log") {
                await runtime.run(step.text);
                await new Promise(r => setTimeout(r, step.delay));
            }

if (step.type === "progress") {
    for (let i = 1; i <= step.steps; i++) {
        const filled = "█".repeat(i);
        const empty = "░".repeat(step.steps - i);
        const percent = Math.floor((i / step.steps) * 100);

        await runtime.run(`__PROGRESS__ ${step.prefix} ${filled}${empty} ${percent}%`);
        await new Promise(r => setTimeout(r, step.delay));
    }
}

        }

        // --- ENTER SHELL ---
        await runtime.run("[SYSTEM] Entering interactive shell...");
        await runtime.run("PRIMORDIUM OS v1.0");
        await runtime.run(">");

        console.log("=== PRIMORDIUM APPLICATION END ===");
    }
};
