// see types of prompts:
// https://github.com/enquirer/enquirer/tree/master/examples
//
module.exports = {
  prompt: ({ inquirer }) =>
    inquirer.prompt([
      {
        type: "list",
        name: "type",
        message: "Choice Component Type.",
        choices: ["atoms", "molecules", "organism"],
      },
      {
        type: "input",
        name: "name",
        message: "Input Component Name.",
      },
    ])
};
