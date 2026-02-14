#!/usr/bin/env node

const args = process.argv.slice(2);
const command = args[0];

switch (command) {
    case "run":
        require("../commands/run.js").execute();
        break;

    case "build":
        require("../commands/build.js").execute();
        break;

    case "doctor":
        require("../commands/doctor.js").execute();
        break;

    default:
        console.log("PRIMORDIUM CLI");
        console.log("Usage:");
        console.log("  primordium run");
        console.log("  primordium build");
        console.log("  primordium doctor");
}
