const fs = require("fs");
const path = require("path");

module.exports = {
    execute(pkg) {
        if (!pkg) return console.log("Missing package name");

        const regPath = path.join(__dirname, "../registry/installed.json");
        const reg = JSON.parse(fs.readFileSync(regPath));

        reg.packages = reg.packages.filter(p => p !== pkg);
        fs.writeFileSync(regPath, JSON.stringify(reg, null, 4));

        console.log("[PRM] Removed:", pkg);
    }
};
