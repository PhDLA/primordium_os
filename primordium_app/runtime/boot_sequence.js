module.exports = [
    { type: "log", text: "[BOOT] Initializing kernel...", delay: 200 },

    { type: "log", text: "[KERNEL] Allocating memory regions...", delay: 150 },
    { type: "log", text: "[KERNEL] Mapping virtual address space...", delay: 150 },
    { type: "log", text: "[KERNEL] Loading interrupt handlers...", delay: 150 },
    { type: "log", text: "[KERNEL] Kernel OK.", delay: 100 },

    { type: "log", text: "[MODULE] Loading core modules...", delay: 200 },
    { type: "progress", steps: 10, prefix: "[MODULE] Loading", delay: 80 },

    { type: "log", text: "[SYS] Checking memory...", delay: 150 },
    { type: "log", text: "[SYS] 4096 MB OK", delay: 100 },
    { type: "log", text: "[SYS] Swap OK", delay: 100 },

    { type: "log", text: "[SERV] Starting system services...", delay: 200 },
    { type: "log", text: "[SERV] All services running.", delay: 150 },

    { type: "log", text: "[UI] Loading UI shell...", delay: 150 },
    { type: "log", text: "[UI] UI shell ready.", delay: 100 },

    { type: "log", text: "[RUNTIME] Establishing pipeline...", delay: 150 },
    { type: "log", text: "[RUNTIME] Runtime ready.", delay: 100 },

    { type: "log", text: "[SYSTEM] PRIMORDIUM OS is now ready.", delay: 0 }
];

