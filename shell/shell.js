module.exports = {
    handle(input) {
        const cmd = input.trim();

        if (cmd === "help") {
            return "Available commands:\nhelp\necho <text>\nsysinfo\nclear";
        }

        if (cmd.startsWith("echo ")) {
            return cmd.slice(5);
        }

        if (cmd === "sysinfo") {
            return "PRIMORDIUM OS v1.0\nKernel: experimental\nMemory: 4096 MB";
        }

        if (cmd === "clear") {
            return "__CLEAR__";
        }

        return `Unknown command: ${cmd}`;
    }
};
