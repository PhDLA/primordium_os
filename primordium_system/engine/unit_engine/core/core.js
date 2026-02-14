module.exports = {
    name: "unit_engine",
    init() { console.log("[ENGINE] unit_engine initialized"); },
    execute(data) { return { engine: "unit_engine", processed: true, input: data }; }
};