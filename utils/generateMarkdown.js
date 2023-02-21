// function to generate markdown for README
function generateMarkdown(data) {

  return `# ${data.title}
${licenseBadge(data)}

  ## Description
  ${data.description}

  ## Table of Contents
    * [Installation](#installation)
    * [Usage](#usage)
    * [License](#license)
    * [Contributing](#contributing)
    * [Tests](#tests)
    * [Questions](#questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License 
  
  This project is licensed under the ${data.license} license

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.test}

  ## Questions
  
  If you have any questions about the repo, open an issue or contact me directly 
  at ${data.email}. You can find more of my work at ${data.username}

`;
}

module.exports = generateMarkdown;

function licenseBadge(data){

  const licenseType = data.license;
  let license = "";

  if (licenseType === "MIT"){
    return license = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  };
  if (licenseType === "Apache License 2.0"){
    return license = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  };
  if (licenseType === "GNU General Public License v3.0"){
    return license = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
  };
  if (licenseType === "BSD-2-Clause"){
    return license = "[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)";
  };
  if (licenseType === "BSD-3-Clause"){
    return license = "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
  };
}
