module.exports = {
    async handleRequest(input) {
        return { module: "superficies", received: input, response: "Echo: " + input };
    }
};