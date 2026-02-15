const http = require("http");
const fs = require("fs");
const path = require("path");
const WebSocket = require("ws");

// --- HTTP SERVER ---
const server = http.createServer((req, res) => {
    if (req.url === "/" || req.url === "/index.html") {
        const html = fs.readFileSync(
            path.join(__dirname, "../client/index.html"),
            "utf8"
        );
        res.writeHead(200, { "Content-Type": "text/html" });
        return res.end(html);
    }

    if (req.url.endsWith(".js")) {
        const jsPath = path.join(__dirname, "../client", req.url);
        if (fs.existsSync(jsPath)) {
            const js = fs.readFileSync(jsPath, "utf8");
            res.writeHead(200, { "Content-Type": "application/javascript" });
            return res.end(js);
        }
    }

    if (req.url.endsWith(".css")) {
        const cssPath = path.join(__dirname, "../client", req.url);
        if (fs.existsSync(cssPath)) {
            const css = fs.readFileSync(cssPath, "utf8");
            res.writeHead(200, { "Content-Type": "text/css" });
            return res.end(css);
        }
    }

    res.writeHead(404);
    res.end("Not found");
});

// --- WEBSOCKET SERVER ---
const wss = new WebSocket.Server({ server });

// Load PRIMORDIUM APP
const app = require("../../primordium_app/app.js");

wss.on("connection", (ws) => {
    console.log("[WEB] Client connected");
    global.PRIMORDIUM_WS = ws;

    // --- START APP ONLY AFTER CLIENT CONNECTS ---
    app.start();
});

// --- START SERVER ---
const PORT = process.env.PORT || 8080;

server.listen(PORT, () => {
    console.log("[WEB] Server running on port " + PORT);
});
