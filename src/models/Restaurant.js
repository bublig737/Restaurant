import DataTypes from 'sequelize'

export default sequelize => {
    const Restaurant = sequelize.define('Restaurant', {
        id: { type: DataTypes.INTEGER, unique: true, primaryKey: true, autoIncrement: true, allowNull: false },
        name: { type: DataTypes.STRING },
        isDeleted: { type: DataTypes.BOOLEAN, defaultValue: false }
    }, {
        tableName: 'Restaurant',
        schema: 'kids_restaurant',
        timestamps: false,
        defaultScope: {
            where: {
                isDeleted: false
            }
        }
    })

    return Restaurant
}