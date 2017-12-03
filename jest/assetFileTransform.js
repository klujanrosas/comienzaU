const path = require('path');

module.exports = {
  process: (_, filename) => {
    console.log(filename);
    return `module.exports = {
      testUri: ${JSON.stringify(path.relative(__dirname, filename))}
    };`;
  }
};
