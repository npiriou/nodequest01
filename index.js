const { name, campus } = require("./information.js");
var cowsay = require("cowsay");

console.log(
  cowsay.think({
    text: `Hello I'm ${name} from ${campus} Campus`,
    e: `^^'`,
    T: "U ",
  })
);
