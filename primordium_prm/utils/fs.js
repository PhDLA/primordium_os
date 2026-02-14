module.exports = {
    exists(p) { return require("fs").existsSync(p); }
};
