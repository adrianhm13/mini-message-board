const dateFormat = require("./dateFormat");

const messages = [
  {
    text: "Hi there!",
    user: "Armando",
    added: dateFormat(new Date()),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: dateFormat(new Date()),
  },
];

module.exports = messages