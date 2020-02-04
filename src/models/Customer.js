import DataTypes from 'sequelize'

export default sequelize => {
    const Customer = sequelize.define('Customer', {
        id: { type: DataTypes.INTEGER, unique: true, primaryKey: true, autoIncrement: true, allowNull: false },
        name: { type: DataTypes.STRING },
        isDeleted: { type: DataTypes.BOOLEAN, defaultValue: false }
    }, {
        tableName: 'Customer',
        schema: 'kids_restaurant',
        timestamps: false,
        defaultScope: {
            where: {
                isDeleted: false
            }
        }
    })

    return Customer
}