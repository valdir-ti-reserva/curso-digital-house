const User = (sequelize, dataTypes) => {
  const model = sequelize.define(
    'User',
    {
      id: {
        primaryKey: true,
        autoIncrement: true,
        type: dataTypes.INTEGER,
      },
      name: dataTypes.STRING,
      type: dataTypes.STRING, // Tipo pode ser cliente ou usuario
      email: {
        allowNull: false,
        unique: true,
        type: dataTypes.STRING,
      },
      password: {
        allowNull: false,
        type: dataTypes.STRING,
      },
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
      tableName: 'users',
    },
  );

  return model;
};

module.exports = User;
