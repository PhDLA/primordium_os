const parser = require("../../primordium_system/engine/pml_engine/parser/parser.js");
const executor = require("../../primordium_system/engine/pml_engine/executor/executor.js");

module.exports = {
    process(input) {
        const parsed = parser.parse(input);
        const executed = executor.run(parsed);
        return executed.output;
    }
};