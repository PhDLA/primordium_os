module.exports = {
    async handleRequest(input) {
        return { module: "ordo", received: input, response: "Echo: " + input };
    }
};