const api = require("../../primordium_modules/ai_chat/api/api.js");
const shell = require("../../primordium_modules/shell/shell.js");

module.exports = {
    async process(text) {

        // 1) BOOT LOGOK - valtozatlanul tovabb
        if (text.startsWith("[")) {
            return text;
        }

        // 2) PROGRESS BAR - valtozatlanul tovabb
        // (ha biztosra akarsz menni, ezt akár ki is veheted)
        if (text.indexOf("█") !== -1 || text.indexOf("░") !== -1) {
            return text;
        }

        // 3) SHELL PARANCSOK
        const cmd = text.trim();

        const shellCommands = ["help", "echo", "sysinfo", "clear"];

        if (shellCommands.some(c => cmd === c || cmd.startsWith(c + " "))) {
            return shell.handle(cmd);
        }

        // 4) MINDEN MAS - AI modul
        const result = await api.handleRequest(text);
        return result.response;
    }
};
