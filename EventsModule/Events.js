//! Import EventEmitter class
const EventEmitter = require("events");

//! Create an instance of EventEmitter
const emitter = new EventEmitter();

// 1. Define an event listener (addListener)

emitter.on("greet", () => {
  console.log(`Hello`);
});

// 2. Trigger (emit) the "greet" event

emitter.emit("greet");


//! You can also pass arguments while emitting.

emitter.on("greet", (username) => {
  console.log(`hello ${username}`);
});

emitter.emit("greet", "Vinay");

emitter.on("greet", (username, prof) => {
  console.log(`hello ${username}, are you intersted in ${prof}?, ri8`);
});

emitter.emit("greet", "Everyone", "Full Stack Dev");

// //! but it's best idea to take a single argument as an object.

// emitter.on("greet", (arg) => {
//   console.log(`hello ${arg.username}, You are a ${arg.prof}, ri8`);
// });


// emitter.emit("greet", { username: "Vinod Thapa", prof: "Full Stack Dev" });