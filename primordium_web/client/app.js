const logBox = document.getElementById("log");
const ws = new WebSocket(`wss://${location.host}`);

ws.onmessage = (event) => {
    logBox.textContent += event.data + "\n";
    logBox.scrollTop = logBox.scrollHeight;
};

socket.onmessage = (event) => {
    const text = event.data;
    const logBox = document.getElementById("logBox");

    if (text.startsWith("__PROGRESS__")) {
        const clean = text.replace("__PROGRESS__", "").trim();

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

    logBox.innerText += text + "\n";
};
