function renderLicenseBadge(license) {
    if (license === 'None') {
      return '';
    }
    return `![License](https://img.shields.io/badge/License-${license}-brightgreen.svg)`;
  }

  function renderLicenseLink(license) {
    if (license === 'None') {
      return '';
    }
    return `[${license} License](YOUR_LICENSE_URL)`;
  }

  function renderLicenseSection(license) {
    if (license === 'None') {
      return '';
    }
    return `
  ## License
  
  ${renderLicenseBadge(license)}
  
  This project is licensed under the terms of the ${renderLicenseLink(license)}.`;
  }
  
  function generateMarkdown(data) {
    const licenseSection = renderLicenseSection(data.license);
  
    return `# ${data.title}
  
  ## Description
  
  ${data.description}
  
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  ${licenseSection ? '- [License](#license)\n' : ''}- [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation
  
  ${data.installation}
  
  ## Usage
  
  ${data.usage}
  
  ${licenseSection}
  
  ## Contributing
  
  ${data.contributing}
  
  ## Tests
  
  ${data.tests}
  
  ## Questions
  
  If you have any questions, DO NOT feel free to reach out:
  
  - GitHub: [${data.githubUsername}](https://github.com/${data.githubUsername})
  - Email: [${data.email}](mailto:${data.email})
  
  ---
  
  **Note:** Click on the links in the Table of Contents to navigate to the corresponding sections in the README.`;
  }
  
  module.exports = generateMarkdown;
  