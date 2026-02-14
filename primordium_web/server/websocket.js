module.exports = {
    send(msg) {
        if (global.PRIMORDIUM_WS) {
            global.PRIMORDIUM_WS.send(msg);
        }
    }
};
