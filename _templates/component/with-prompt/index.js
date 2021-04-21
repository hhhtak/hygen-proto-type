// see types of prompts:
// https://github.com/enquirer/enquirer/tree/master/examples
//
module.exports = {
  prompt: ({ inquirer }) =>
    inquirer.prompt([
      {
        type: "list",
        name: "message",
        message: "What's your message?",
        choices: ["aaa", "bbb", "ccc"],
      },
      {
        type: "input",
        name: "name",
        message: "What's your messageeeee?",
      },
    ]),
  // .then(({ message }) => inquirer.prompt()),
};

// module.exports = [
//   {
//     type: "list",
//     name: "message",
//     message: "What's your message?",
//     choices: ["aaa", "bbb", "ccc"],
//   },
//   {
//     type: "input",
//     name: "name",
//     message: "What's your messageeeee?",
//   },
// ];
