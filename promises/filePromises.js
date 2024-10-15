import fs from 'fs/promises'

const prom = fs.readFile("./file.txt", "utf-8");

console.log("Registering callback");
// prom
//     .then(data => {
//         console.log(data);

//         return fs.writeFile("./output.txt", data, "utf-8");
//     })
//     .then(() => {
//         console.log("All done writing to file!");

//         return fs.writeFile("./time.log", new Date().toUTCString(), "utf-8");
//     })
//     .then(() => {
//         console.log("Logged the time");
//     })

const data = await prom;
await fs.writeFile("./output.txt", data, "utf-8");
await fs.writeFile("./time.log", new Date().toUTCString(), "utf-8");
console.log("Logged the time");
console.log("All done!");