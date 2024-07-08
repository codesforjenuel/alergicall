module.exports = (sequelize, Datatypes) => {
    const Products = sequelize.define("Products", {
        id: {
            type: Datatypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
          },
        productName: {
            type: Datatypes.STRING,
            allowNull: false
        },
        productType: {
            type: Datatypes.STRING,
            allowNull: false
        },
        productLocation: {
            type:Datatypes.STRING,
            allowNull: false
        },
        notes: {
            type:Datatypes.STRING,
            allowNull: false
        },
        
        
    })
    return Products
}