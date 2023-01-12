// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
const questions = require("./utils/questions");

inquirer.prompt(questions).then((answers) => {
  console.log(answers);
  fs.writeFile("README.md", generateMarkdown(answers), (err) =>
    err
      ? console.log(err)
      : console.log("Your Professional README.md Was Created")
  );
});