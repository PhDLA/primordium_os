const logBox = document.getElementById("log");
const ws = new WebSocket(`wss://${location.host}`);

ws.onmessage = (event) => {
    logBox.textContent += event.data + "\n";
    logBox.scrollTop = logBox.scrollHeight;
};

socket.onmessage = (event) => {
    const text = event.data;
    const logBox = document.getElementById("logBox");

    // PROGRESS BAR
    if (text.startsWith("__PROGRESS__")) {
        const clean = text.replace("__PROGRESS__", "").trim();

        // jelenlegi sorok
        let lines = logBox.textContent.split("\n");

        // ha az utolsó sor progress bar → felülírjuk
        if (lines[lines.length - 1].startsWith("[MODULE] Loading")) {
            lines[lines.length - 1] = clean;
        } else {
            lines.push(clean);
        }

        // teljes tartalom újraépítése
        logBox.textContent = lines.join("\n");
        return;
    }

    // NORMÁL SOR
    let lines = logBox.textContent.split("\n");
    lines.push(text);
    logBox.textContent = lines.join("\n");
};


