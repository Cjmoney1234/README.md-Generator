const questions = [
  {
    type: 'input',
    name: 'title',
    message: `What is your project's title?`,
  },
  {
      type: 'input',
      message: 'Provide a short description of your project:',
      name: 'description',
    },
    {
      type: 'input',
      message: 'What package was used to generate this README.md?',
      name: 'installation',
    },
    {
      type: 'input',
      message: 'Who will be contributing to this project',
      name: 'contributing',
    },
  {
    type: 'list',
    message: 'What license does your ReadMe include?',
    name: 'license',
    choices: ['MIT', 'Apache', 'Open', 'Academic', 'Mozilla', 'ISC'],
  },
  {
      type: 'list',
      message: 'Will a test be required?',
      name: 'tests',
      choices: ['Yes', 'No'],
    },
  {
      type: 'input',
      message: 'Anything you need help with?',
      name: 'questions',
    },
  {
      type: 'input',
      message: 'What is your Github username?',
      name: 'github',
    },
    {
      type: 'input',
      message: 'what is your email address',
      name: 'email',
    },
]

module.exports = questions