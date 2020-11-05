const request = require('supertest');
const app = require('../app');
const { DataTypes } = require('sequelize');
const faker = require('faker');
const SequelizeMock = require('sequelize-mock');

const DBConnectionMock = new SequelizeMock();
const UserModel = require('../models/User');

const User = UserModel(DBConnectionMock, DataTypes);

it('should be created a new user', async() => {
  
  const response = await request(app).post('/register').send({
    name: faker.name.findName(),
    email: faker.internet.email(),
    password: faker.internet.password()
  });

  expect(response.body).toHaveProperty('id');
  expect(response.body).toHaveProperty('name');
  expect(response.body).toHaveProperty('email');
  expect(response.status).toBe(201);
});

it('should return an user list', async ()=>{
  const users = await User.findAll();
  expect(Array.isArray(users)).toBe(true);
})