import DataTypes from 'sequelize'

export default sequelize => {
    const CourierRestaurant = sequelize.define('CourierRestaurant', {
        id: { type: DataTypes.INTEGER, unique: true, primaryKey: true, autoIncrement: true, allowNull: false },
        courierId: { type: DataTypes.INTEGER },
        restaurantId: { type: DataTypes.INTEGER },
        isDeleted: { type: DataTypes.BOOLEAN, defaultValue: false }
    },{
        tableName: 'CourierRestaurant',
        schema: 'kids_restaurant',
        timestamps: false,
        defaultScope: {
            where: {
                isDeleted: false
            }
        }
    })

    CourierRestaurant.associate = models => {
        CourierRestaurant.belongsTo(models.Restaurant, {
            foreignKey: 'restaurantId',
            as: 'restaurant',
        })
    }

    return CourierRestaurant
}