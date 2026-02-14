module.exports = {
    async handleRequest(input) {
        return { module: "ai_chat", received: input, response: "Echo: " + input };
    }
};