const logBox = document.getElementById("log");
const ws = new WebSocket(`wss://${location.host}`);

ws.onmessage = (event) => {
    logBox.textContent += event.data + "\n";
    logBox.scrollTop = logBox.scrollHeight;
};
