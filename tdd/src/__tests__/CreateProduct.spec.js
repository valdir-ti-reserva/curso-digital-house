const request = require('supertest');
const app = require('../app');

describe('ao criar um produto deveria', () => {

  let product = {
    name: 'Ventilador',
    price: '150.55',
    quantity: 145
  }

  it('deveria retornar o status 201', async() => {
    const response = await request(app).post('/product').send(product);
    expect(response.status).toBe(201)
  });
  
  it('deveria retornar uma listagem de produtos', async() => {
    const products = await request(app).get('/product').send();
    expect(Array.isArray(products)).toBe(true);
  });
  
  it('deveria enviar um produto', async() => {
    const response = await request(app).get('/product').send({});
    expect(response.body).toHaveProperty('name');
    expect(response.body).toHaveProperty('price');
    expect(response.body).toHaveProperty('quantity');
    expect(response.status).toBe(201)
  });


});


