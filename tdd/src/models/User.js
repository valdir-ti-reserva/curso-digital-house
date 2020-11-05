const User = (sequelize, dataTypes) => {
  const model = sequelize.define(
    'User',
    {
      id: {
        primaryKey: true,
        autoIncrement: true,
        type: dataTypes.INTEGER
      },
      name: {
        type: dataTypes.STRING
      },
      email:{
        type: dataTypes.STRING,
        unique: true
      },
      password: {
        type: dataTypes.STRING
      }
    }
  )
  return model;
}

module.exports = User;