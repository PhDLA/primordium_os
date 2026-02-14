#!/usr/bin/env node

const args = process.argv.slice(2);
const command = args[0];
const param = args[1];

switch (command) {
    case "install":
        require("../commands/install.js").execute(param);
        break;

    case "update":
        require("../commands/update.js").execute(param);
        break;

    case "link":
        require("../commands/link.js").execute(param);
        break;

    case "list":
        require("../commands/list.js").execute();
        break;

    case "remove":
        require("../commands/remove.js").execute(param);
        break;

    default:
        console.log("PRIMORDIUM PACKAGE MANAGER (PRM)");
        console.log("Usage:");
        console.log("  prm install <package>");
        console.log("  prm update <package>");
        console.log("  prm link <module>");
        console.log("  prm list");
        console.log("  prm remove <package>");
}
