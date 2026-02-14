module.exports = {
    getEnv() {
        return process.env.PRIMORDIUM_ENV || "dev";
    }
};
