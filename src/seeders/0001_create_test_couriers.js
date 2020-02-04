'use strict';
const { Courier } = require('../models');
const Promise = require('bluebird')

const couriersData = [
  {
    name: 'Alice',
    isBusy: false,
  }, {
    name: 'Bob',
    isBusy: true,
  }
];

module.exports = {
  up (queryInterface, Sequelize) {
    return Promise.mapSeries(couriersData, data => {
      return Courier.create(data);
    });
  },
  down (queryInterface, Sequelize) {
    return true;
  }
};
