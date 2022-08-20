const log = require("./logger");
const path = require("path");
const os = require("os");
const fs = require("fs"); //File System
const EventEmitter = require("events");

//this all is wrapped in a hidden function with various variables like the ones below:
console.log(__filename);
console.log(__dirname);

//Using in built path function

var pathObj = path.parse(__filename);

log(pathObj);
// This information is finally available with Node.js
log(`Total Memory ${os.totalmem()}`);
log(`Free Memory ${os.freemem()}`);
log(`Memory left ${os.totalmem() - os.freemem()}`);

//File System examples.

const files = fs.readdirSync("./");
log(files);

const filesAsync = fs.readdir("./", function (err, files) {
  if (err) return console.log("Error", err);

  log(files);
});

/// Event Modules

const emitter = new EventEmitter();

emitter.on("messageLogged", () => {
  log("Message Has been called, go crazy");
});
emitter.emit("messageLogged");

// Or we can do add some argument arguments
emitter.on("argumentEvent", (arg) => {
  log("Arguments have changed", arg);
});
emitter.emit("argumentEvent", { id: 1, name: "Doing stuff" });
