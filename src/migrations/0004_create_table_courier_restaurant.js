const TABLE = {
  tableName: 'CourierRestaurant',
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
      restaurantId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: { tableName: "Restaurant", schema: 'kids_restaurant'}, key: 'id' },
        field: 'restaurantId'
      },
      courierId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: { tableName: "Courier", schema: 'kids_restaurant'}, key: 'id' },
        field: 'courierId'
      },
      isDeleted: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        field: 'isDeleted'
      }
    }),
  down: (queryInterface /* , Sequelize */) => queryInterface.dropTable(TABLE)
};