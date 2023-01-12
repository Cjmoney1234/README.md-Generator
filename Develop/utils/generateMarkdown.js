// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === "HTML"){
    return "HTML LICENSE BADGE"
  }}
  
  // TODO: Create a function that returns the license link
  // If there is no license, return an empty string
  function renderLicenseLink(license) {}
  
  // TODO: Create a function that returns the license section of README
  // If there is no license, return an empty string
  function renderLicenseSection(license) {}
  
  // TODO: Create a function to generate markdown for README
  function generateMarkdown(data) {
    return `# ${data.title}
  
  ![badge](https://img.shields.io/badge/license-${data.license}-brightgreen)
  
  ## Description
  ${data.description}
    
  ### Table Of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [License](#license)
  - [Tests](#tests)
  - [Questions](#questions)
  
  
  ## Installation
    npm install ${data.installation}
  
  ## Usage
  ![Lets Code!!](https://media.tenor.com/GfSX-u7VGM4AAAAC/coding.gif)
      
  ## Licesnse
    ${data.license}
  
  ## Contributing
    ${data.contributing}
  
  ## Tests
    ${data.tests}
  
  ## Questions
    Any questions you have regarding "${data.questions}" can be emailed to ${data.email}
  
    https://www.github.com/${data.github}
  
  `;
  }
  
  module.exports = generateMarkdown;
  