module.exports = {
    async handleRequest(input) {
        return { module: "legacy", received: input, response: "Echo: " + input };
    }
};