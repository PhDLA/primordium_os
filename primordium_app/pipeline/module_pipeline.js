const api = require("../../primordium_modules/ai_chat/api/api.js");

module.exports = {
    async process(text) {
        const result = await api.handleRequest(text);
        return result.response;
    }
};