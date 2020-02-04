'use strict';
const { Restaurant } = require('../models');
const Promise = require('bluebird')

const restaurantsData = [
  {
    name: 'Burger King'
  }, {
    name: 'Stolovka'
  }
];

module.exports = {
  up (queryInterface, Sequelize) {
    return Promise.mapSeries(restaurantsData, data => {
      return Restaurant.create(data);
    });
  },
  down (queryInterface, Sequelize) {
    return true;
  }
};
