module.exports = {
    async handleRequest(input) {
        return { module: "operatio", received: input, response: "Echo: " + input };
    }
};