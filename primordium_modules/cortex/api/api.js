module.exports = {
    async handleRequest(input) {
        return { module: "cortex", received: input, response: "Echo: " + input };
    }
};