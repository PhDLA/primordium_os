module.exports = {
    execute(pkg) {
        if (!pkg) return console.log("Missing package name");
        console.log("[PRM] Updated:", pkg);
    }
};
