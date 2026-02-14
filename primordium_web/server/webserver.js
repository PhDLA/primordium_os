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
         const PORT = process.env.PORT || 8080;

         server.listen(PORT, () => {
               console.log("[WEB] Server running on port " + PORT);
          });


        wss.on("connection", ws => {
            console.log("[WEB] Client connected");
            global.PRIMORDIUM_WS = ws;
        });
    }
};
