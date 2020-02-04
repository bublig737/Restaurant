const TABLE = {
  tableName: 'CustomerOrder',
  schema: 'kids_restaurant'
}

module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable( TABLE , {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        unique: true,
        autoIncrement: true,
        field: 'id'
      },
      courierId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: { tableName: "Courier", schema: 'kids_restaurant'}, key: 'id' },
        field: 'courierId'
      },
      restaurantId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: { tableName: "Restaurant", schema: 'kids_restaurant'}, key: 'id' },
        field: 'restaurantId'
      },
      customerId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: { tableName: "Customer", schema: 'kids_restaurant'}, key: 'id' },
        field: 'customerId'
      },
      timeStart: {
        type: Sequelize.TIME,
        allowNull: false,
        field: 'timeStart'
      },
      timeEnd: {
        type: Sequelize.TIME,
        allowNull: false,
        field: 'timeEnd'
      },
    }),
  down: (queryInterface /* , Sequelize */) => queryInterface.dropTable(TABLE)
};