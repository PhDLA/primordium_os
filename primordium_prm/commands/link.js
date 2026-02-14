module.exports = {
    execute(moduleName) {
        if (!moduleName) return console.log("Missing module name");
        console.log("[PRM] Linked module:", moduleName);
    }
};
