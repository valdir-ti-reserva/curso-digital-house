const { Car } = require('../models');

const CarController = {
  async index(req, res) {
    const cars = await Car.findAll({
      attributes: ['id', 'model', 'brand', 'year', 'price', 'rentAmount'],
    });

    res.status(200).json(cars);
  },
  async show(req, res) {
    const { id } = req.params;
    const car = await Car.findOne({
      where: {
        id,
      },
      attributes: ['id', 'model', 'brand', 'year', 'price', 'rentAmount'],
    });

    return res.status(200).json(car);
  },
  async store(req, res) {
    const { model, brand, year, price, rentAmount } = req.body;

    const now = new Date();

    await Car.create({
      model,
      brand,
      year,
      price,
      rentAmount,
      createdAt: now,
      updatedAt: now,
    });

    return res.status(201).json({ model, brand, year, price, rentAmount });
  },
  async update(req, res) {
    const { id } = req.params;
    const { model, brand, year, price, rentAmount } = req.body;

    const now = new Date();

    const car = await Car.update(
      {
        model,
        brand,
        year,
        price,
        rentAmount,
        updatedAt: now,
      },
      {
        where: {
          id,
        },
      },
    );

    return res.status(200).json(car);
  },
  async delete(req, res) {
    const { id } = req.params;

    const carDestroy = await Car.destroy({
      where: {
        id,
      },
    });

    return res.status(204).json();
  },
};

module.exports = CarController;
