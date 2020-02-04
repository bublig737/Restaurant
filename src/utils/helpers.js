
import fs from 'fs';

export const getFiles = (dir, files_ = [], level = 0) => {
  fs.readdirSync(dir)
    .forEach((file) => {
      let name = dir + '/' + file;
      if (fs.statSync(name).isDirectory()) {
        getFiles(name, files_, level + 1, retPromise);
      } else {
        (file.indexOf('.') !== 0) && (file.slice(-3) === '.js') && (!(file == 'index.js' && level == 0)) && files_.push(name);
      }
    });
    return files_;
};
