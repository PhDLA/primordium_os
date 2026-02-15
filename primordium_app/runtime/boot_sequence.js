module.exports = [
    { text: "[BOOT] Initializing kernel...", delay: 200 },
    { text: "[KERNEL] Allocating memory regions...", delay: 150 },
    { text: "[KERNEL] Mapping virtual address space...", delay: 150 },
    { text: "[KERNEL] Loading interrupt handlers...", delay: 150 },
    { text: "[KERNEL] Kernel OK.", delay: 100 },

    { text: "[MODULE] Loading core modules...", delay: 200 },
    { progress: true, steps: 10, prefix: "[MODULE] Loading", delay: 80 },

    { text: "[SYS] Checking memory...", delay: 150 },
    { text: "[SYS] 4096 MB OK", delay: 100 },
    { text: "[SYS] Swap OK", delay: 100 },

    { text: "[SERV] Starting system services...", delay: 200 },
    { text: "[SERV] All services running.", delay: 150 },

    { text: "[UI] Loading UI shell...", delay: 150 },
    { text: "[UI] UI shell ready.", delay: 100 },

    { text: "[RUNTIME] Establishing pipeline...", delay: 150 },
    { text: "[RUNTIME] Runtime ready.", delay: 100 },

    { text: "[SYSTEM] PRIMORDIUM OS is now ready.", delay: 0 }
];

