const fs = require('fs');

// writing files
const writeFile = manQuest => {
  return new Promise((resolve, reject) => {
    fs.writeFile('./util/dist/index.html', manQuest, err => {
      if (err) {
        reject(err);
        return;
      }

      resolve({
        ok: true,
        message: 'File created!'
      });
    });
  });
};

module.exports = writeFile;