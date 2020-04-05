const got = require('got');
const YAML = require('yamljs');
const fs = require('fs');
const path = require('path');

const fileURL = `https://raw.githubusercontent.com/github/linguist/master/lib/linguist/languages.yml`;
const outputfile = `../src/views/styles/languageColors.json`;

(async () => {
  try {
    const colors = {};
    const response = await got(fileURL);

    if (response.body) {
      const data = YAML.parse(response.body);
      Object.keys(data).forEach(language => {
        if (data[language].color) {
          colors[language] = data[language].color;
        }
      });
      fs.writeFileSync(
        path.resolve(__dirname, outputfile),
        JSON.stringify(colors, null, 2)
      );
    }
  } catch (error) {
    console.log(error.response.body);
  }
})();
