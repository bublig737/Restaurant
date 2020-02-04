import DataTypes from 'sequelize'

export default sequelize => {
    const CustomerOrder = sequelize.define('CustomerOrder', {
        id: { type: DataTypes.INTEGER, unique: true, primaryKey: true, autoIncrement: true, allowNull: false},
        customerId: { type: DataTypes.INTEGER },
        restaurantId: { type: DataTypes.INTEGER },
        courierId: { type: DataTypes.INTEGER },
        timeStart: { type: DataTypes.DATE },
        timeEnd: { type: DataTypes.DATE }
    },{
        tableName: 'CustomerOrder',
        schema: 'kids_restaurant',
        timestamps: false
    })

    CustomerOrder.associate = models => {
        CustomerOrder.belongsTo(models.Customer, {
            foreignKey: 'customerId',
            as: 'customer',
        })
        CustomerOrder.belongsTo(models.Restaurant, {
            foreignKey: 'restaurantId',
            as: 'restaurant',
        })
        CustomerOrder.belongsTo(models.Courier, {
            foreignKey: 'courierId',
            as: 'courier',
        })
    }

    return CustomerOrder
}