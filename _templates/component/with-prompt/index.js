// see types of prompts:
// https://github.com/enquirer/enquirer/tree/master/examples
//
module.exports = [
  {
    type: "input",
    name: "message",
    message: "What's your message?",
    choices: ["standard", "organism", "moment"],
  },
  {
    type: "input",
    name: "name",
    message: "What's your hogehoge?",
  },
];
