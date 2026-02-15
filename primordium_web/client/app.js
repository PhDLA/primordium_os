const logBox = document.getElementById("log");
const socket = new WebSocket(`wss://${location.host}`);

// FRONTEND WebSocket kapcsolat
socket.onmessage = (event) => {
    const text = event.data;
    const logBox = document.getElementById("logBox");

    // PROGRESS BAR
    if (text.startsWith("__PROGRESS__")) {
        const clean = text.replace("__PROGRESS__", "").trim();

        let lines = logBox.textContent.split("\n");
        const last = lines[lines.length - 1];

        if (last.startsWith("[MODULE] Loading")) {
            lines[lines.length - 1] = clean;
        } else {
            lines.push(clean);
        }

        logBox.textContent = lines.join("\n");
        return;
    }

    // NORMAL LINES
    let lines = logBox.textContent.split("\n");
    lines.push(text);
    logBox.textContent = lines.join("\n");
};
