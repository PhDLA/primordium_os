module.exports = {
    name: "table_engine",
    init() { console.log("[ENGINE] table_engine initialized"); },
    execute(data) { return { engine: "table_engine", processed: true, input: data }; }
};