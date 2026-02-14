const ws = require("../server/websocket.js");

module.exports = {
    log(msg) {
        console.log(msg);
        ws.send(msg);
    }
};
