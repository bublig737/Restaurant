const TABLE = {
  tableName: 'Restaurant',
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
      name: {
        type: Sequelize.TEXT,
        allowNull: false,
        field: 'name'
      },
      isDeleted: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        field: 'isDeleted'
      }
    }),
  down: (queryInterface /* , Sequelize */) => queryInterface.dropTable(TABLE)
};