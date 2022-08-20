const EventEmitter = require("events");
const emitter = new EventEmitter();

function log(message, ...rest) {
  console.log(message, ...rest);
  // emitter.emit("messageLogged");
}

module.exports = log;
