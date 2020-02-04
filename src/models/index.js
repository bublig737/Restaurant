
import Sequelize from 'sequelize';
import config from '../config/sequelize'
import { getFiles } from '../utils/helpers';

let sequelize = new Sequelize(config);

let db =  {};

let files = getFiles(__dirname, [], 0);

files.forEach((file) => {
  let model = sequelize.import(file);
  db[model.name] = model;
});

addAssociations(db);
loadScopes(db);
decorateFunctions(db);


function addAssociations(dbData) {
  Object.keys(dbData).forEach(function(modelName) {
    if ('associate' in dbData[modelName]) {
      dbData[modelName].associate(dbData);
    }
  });
}

function decorateFunctions(dbData) {
  Object.keys(dbData).forEach(function(modelName) {
      dbData[modelName].remove = (where) => {
        return dbData[modelName].update({ isDeleted: true }, { where })
      };
  });
}

function loadScopes(dbData) {
  Object.keys(dbData).forEach(function(modelName) {
    if ('loadScopes' in dbData[modelName]) {
      dbData[modelName].loadScopes(dbData);
    }
  });
}

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
