const { User } = require('../models');
const bcrypt = require('bcryptjs');

const UserController = {
  async index(req, res) {
    const users = await User.findAll({
      attributes: ['id', 'name', 'email', 'type'],
    });

    res.status(200).json(users);
  },
  async show(req, res) {
    const { id } = req.params;
    const user = await User.findOne({
      where: {
        id,
      },
      attributes: ['id', 'name', 'email', 'type'],
    });

    return res.status(200).json(user);
  },
  async store(req, res) {
    const { name, email, password, type } = req.body;

    const now = new Date();
    const hash = bcrypt.hashSync(password, 10);

    const user = await User.create({
      name,
      email,
      password: hash,
      type,
      createdAt: now,
      updatedAt: now,
    });

    return res.status(201).json({ name, email, type });
  },
  async update(req, res) {
    const { id } = req.params;
    const { name, email, type } = req.body;

    const now = new Date();

    const user = await User.update(
      { name, email, type, updatedAt: now },
      {
        where: {
          id,
        },
      },
    );

    return res.status(200).json(user);
  },
  async delete(req, res) {
    const { id } = req.params;

    const userDestroy = await User.destroy({
      where: {
        id,
      },
    });

    return res.status(204).json();
  },
};

module.exports = UserController;
