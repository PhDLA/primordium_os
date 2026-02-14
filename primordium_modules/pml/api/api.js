module.exports = {
    async handleRequest(input) {
        return { module: "pml", received: input, response: "Echo: " + input };
    }
};