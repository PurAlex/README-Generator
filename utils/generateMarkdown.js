// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  ${data.description}

  ## Table of Contents
    *[Installation](#installation)
    *[Usage](#usage)
    *[License](#license)
    *[Contributing](#contributing)
    *[Tests](#tests)
    *[Questions](#questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License 
  ${licenseBadge(data)}

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.test}

  ## Questions
  
  If you have any questions about the repo, open an issue or contact me directly 
  at ${data.username}. You can find more of my work at ${data.email}

`;
}

module.exports = generateMarkdown;

function licenseBadge(data){

  const licenseType = data.license[0];
  let license;

  if (licenseType === "MIT"){
    license = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  };
  if (licenseType === "Apache License 2.0"){
    license = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  };
  if (licenseType === "GNU General Public License v3.0"){
    license = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
  };
  if (licenseType === "BSD-2-Clause"){
    license = "[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)";
  };
  if (license === "BSD-3-Clause"){
    license = "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
  }
}
