const os = require("os");

// 1. Get the OS platform & User Info
console.log("Platform:", os.platform());
console.log("User:", os.userInfo());

// 2. Get the OS CPU architecture
console.log("CPU Architecture:", os.arch());

// 3. Get free system memory
console.log("Free Memory:", os.freemem(), "bytes");

// 4. Get total system memory
console.log("Total Memory:", os.totalmem(), "bytes");

// 5. Get system uptime
console.log("System Uptime:", os.uptime(), "seconds");

// 6. Get home direct
console.log("Home Directory:", os.homedir());

// 7. Get host
//* console.log("Host Name:", os.hostname());

// 8. Get network interfaces
//* console.log("Network Interfaces:", os.networkInterfaces());

// 9. Get CPU information
//* console.log("CPU Info:", os.cpus());

// 10. Get temporary directory
console.log("Temporary Directory:", os.tmpdir());

// 11. Get operating system name
console.log("Operating system:", os.type());
