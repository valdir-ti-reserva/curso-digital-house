const Sequelize = require('sequelize');
const ConfigDatabase = require('../config/database');
const connection = new Sequelize(ConfigDatabase);

const AuthController = {
  async index(req, res){

    const users = await connection.query('SELECT * FROM users');

    res.status(200).json(users);

  },
  async store(req, res){
    
    try {
      
      const { name, email, password } = req.body;
      const now = new Date();  
      const [idUser, err] = await connection.query(`INSERT INTO users(name, email, password, createdAt, updateAt) values ($name, $email, $password, $createdAt, $updateAt)`, 
      {
        bind: {
          name,
          email,
          password,
          createdAt: now,
          updateAt: now,
        }
      });

      return res.status(201).json({id: idUser, name, email});

    } catch (error) {      
      return res.status(400).json({details: 'Usuário não foi criado, tente novamente!'});
    }

  },
  async show(req, res){},
  async update(req, res){},
  async delete(req, res){}
}

module.exports = AuthController;