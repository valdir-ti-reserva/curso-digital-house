const request = require('supertest');
const app = require('../app');

it('should return 400 if no email send', async () => {
  
  const response = await request(app).post('/login').send({
     password: '12345'
  });
  
  expect(response.status).toBe(400);
});

it('should return 400 if no password send', async () => {
  
  const response = await request(app).post('/login').send({
    email: 'val@mail.com' ,
  });
  
  expect(response.status).toBe(400);
});

it('should return 401 if no login success', async () => {
  
  const response = await request(app).post('/login').send({
     email: 'val@mail.com',
     password: '12345'
  });
  
  expect(response.body).toHaveProperty('id');
  expect(response.body).toHaveProperty('token');
  expect(response.status).toBe(200);
});