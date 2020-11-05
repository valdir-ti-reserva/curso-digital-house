const Product = (sequelize, dataTypes) => {
  const model = sequelize.define(
    'Product',
    {
      id: {
        primaryKey: true,
        autoIncrement: true,
        type: dataTypes.INTEGER
      },
      name: {
        type: dataTypes.STRING
      },
      price:{
        type: dataTypes.STRING,
      },
      quantity: {
        type: dataTypes.INTEGER
      }
    }
  )

  return model;
}

module.exports = Product;