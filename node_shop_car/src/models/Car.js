const Car = (sequelize, dataTypes) => {
  const model = sequelize.define(
    'Car',
    {
      id: {
        primaryKey: true,
        autoIncrement: true,
        type: dataTypes.INTEGER,
      },
      model: dataTypes.STRING,
      brand: dataTypes.STRING,
      year: dataTypes.STRING,
      price: dataTypes.DECIMAL(10, 2),
      rentAmount: dataTypes.DECIMAL(10, 2),
      createdAt: {
        allowNull: false,
        type: dataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: dataTypes.DATE,
      },
    },
    {
      tableName: 'cars',
    },
  );

  return model;
};

module.exports = Car;
