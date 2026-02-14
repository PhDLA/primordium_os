module.exports = {
    async handleRequest(input) {
        return { module: "vendor", received: input, response: "Echo: " + input };
    }
};