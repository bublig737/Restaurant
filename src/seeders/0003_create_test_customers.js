'use strict';
const { Customer } = require('../models');
const Promise = require('bluebird')

const restaurantsData = [
  {
    name: 'Vlad Trotskij'
  }, {
    name: 'Alyona Sitnik'
  }
];

module.exports = {
  up (queryInterface, Sequelize) {
    return Promise.mapSeries(restaurantsData, data => {
      return Customer.create(data);
    });
  },
  down (queryInterface, Sequelize) {
    return true;
  }
};
