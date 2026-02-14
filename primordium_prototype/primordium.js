// PRIMORDIUM OS — FIRST BOOTABLE PROTOTYPE
// Auto-generated prototype entry point.

const loadEnvironment = require("../primordium_integration/loader/load_environment.js");
const loadSystem = require("../primordium_integration/loader/load_system.js");
const loadEngines = require("../primordium_integration/loader/load_engines.js");
const loadModules = require("../primordium_integration/loader/load_modules.js");
const loadInterface = require("../primordium_integration/loader/load_interface.js");
const orchestrateBoot = require("../primordium_integration/orchestrator/orchestrate_boot.js");

(async () => {
    console.log("=== PRIMORDIUM OS — PROTOTYPE BOOT START ===");

    console.log("[1] Loading environment...");
    await loadEnvironment.init();

    console.log("[2] Loading system layer...");
    await loadSystem.init();

    console.log("[3] Loading engines...");
    await loadEngines.init();

    console.log("[4] Loading modules...");
    await loadModules.init();

    console.log("[5] Loading interface...");
    await loadInterface.init();

    console.log("[6] Orchestrating boot sequence...");
    await orchestrateBoot.init();

    console.log("=== PRIMORDIUM OS — PROTOTYPE BOOT COMPLETE ===");
})();
