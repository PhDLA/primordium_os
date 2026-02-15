const renderer = require("../../primordium_interface/ui_shell/renderer/renderer.js");
const layout = require("../../primordium_interface/ui_shell/layout/layout.js");

module.exports = {
    display(text) {
        const formatted = layout.layout(text);
        renderer.render(formatted);

        if (global.PRIMORDIUM_WS) {
            global.PRIMORDIUM_WS.send(formatted);
        }
    }
};
