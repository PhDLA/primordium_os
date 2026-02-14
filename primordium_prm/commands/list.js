const fs = require("fs");
const path = require("path");

module.exports = {
    execute() {
        const regPath = path.join(__dirname, "../registry/installed.json");
        const reg = JSON.parse(fs.readFileSync(regPath));

        console.log("[PRM] Installed packages:");
        reg.packages.forEach(p => console.log(" →", p));
    }
};
