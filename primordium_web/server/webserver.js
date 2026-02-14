const http = require("http");
const fs = require("fs");
const path = require("path");
const WebSocket = require("ws");

const server = http.createServer((req, res) => {
    const file = req.url === "/" ? "index.html" : req.url;
    const filePath = path.join(__dirname, "../client", file);

    if (fs.existsSync(filePath)) {
        res.writeHead(200);
        res.end(fs.readFileSync(filePath));
    } else {
        res.writeHead(404);
        res.end("Not found");
    }
});

const wss = new WebSocket.Server({ server });

module.exports = {
    start() {
        server.listen(8080, () => {
            console.log("[WEB] Server running at http://localhost:8080");
        });

        wss.on("connection", ws => {
            console.log("[WEB] Client connected");
            global.PRIMORDIUM_WS = ws;
        });
    }
};
