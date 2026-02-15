const api = require("../../primordium_modules/ai_chat/api/api.js");
const shell = require("../../primordium_modules/shell/shell.js");

module.exports = {
    async process(text) {

        // 1) BOOT LOGOK → változatlanul tovább
        if (text.startsWith("[")) {
            return text;
        }

        // 2) PROGRESS BAR → változatlanul tovább
        if (text.includes("█") || text.includes("░")) {
            return text;
        }

        // 3) SHELL PARANCSOK
        const cmd = text.trim();

        // shell parancsok listája
        const shellCommands = ["help", "echo", "sysinfo", "clear"];

        if (shellCommands.some(c => cmd === c || cmd.startsWith(c + " "))) {
            return shell.handle(cmd);
        }

        // 4) MINDEN MÁS → AI modul
        const result = await api.handleRequest(text);
        return result.response;
    }
};
