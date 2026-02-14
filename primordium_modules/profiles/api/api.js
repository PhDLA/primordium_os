module.exports = {
    async handleRequest(input) {
        return { module: "profiles", received: input, response: "Echo: " + input };
    }
};