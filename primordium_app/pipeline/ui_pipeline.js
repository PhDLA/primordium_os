const renderer = require("../../primordium_interface/ui_shell/renderer/renderer.js");
const layout = require("../../primordium_interface/ui_shell/layout/layout.js");

module.exports = {
display(text) {
    const logBox = document.getElementById("logBox");

    // Progress bar sor
    if (text.startsWith("__PROGRESS__")) {
        const clean = text.replace("__PROGRESS__", "").trim();

        // Ha az utolsó sor progress bar volt → felülírjuk
        const lines = logBox.innerText.split("\n");
        const last = lines[lines.length - 1];

        if (last.startsWith("[MODULE] Loading")) {
            lines[lines.length - 1] = clean;
            logBox.innerText = lines.join("\n");
        } else {
            logBox.innerText += clean + "\n";
        }

        return;
    }

    // Normál sor
    logBox.innerText += text + "\n";
}

};

