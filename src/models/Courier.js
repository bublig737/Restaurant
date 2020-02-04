import DataTypes from 'sequelize'

export default sequelize => {
    const Courier = sequelize.define('Courier', {
        id: { type: DataTypes.INTEGER, unique: true, primaryKey: true, autoIncrement: true, allowNull: false },
        name: { type: DataTypes.STRING },
        isBusy: { type: DataTypes.BOOLEAN },
        isDeleted: { type: DataTypes.BOOLEAN, defaultValue: false }
    }, {
        tableName: 'Courier',
        schema: 'kids_restaurant',
        timestamps: false,
        defaultScope: {
            where: {
                isDeleted: false
            }
        }
    })

    return Courier
}