const logBox = document.getElementById("log");
const ws = new WebSocket("ws://localhost:8080");

ws.onmessage = (event) => {
    logBox.textContent += event.data + "\n";
    logBox.scrollTop = logBox.scrollHeight;
};