module.exports = {
    run(parsed) { return { executed: true, output: parsed.parsed.toUpperCase() }; }
};