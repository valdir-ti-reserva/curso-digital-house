const faker = require('faker');
const SequelizeMock = require('sequelize-mock');

const DBConnectionMock = new SequelizeMock();

const ProductMock = DBConnectionMock.define('products', {
    'name': faker.commerce.productName(),
    'price': faker.commerce.price(),
    'quantity': 15,
});

it('should create a product', async () => {
  const product = await ProductMock.create(ProductMock)  
  expect(product).toHaveProperty('name');
});

it('should return a product list', async () => {
  const products = await ProductMock.findAll();
  expect(Array.isArray(products)).toBe(true);
});