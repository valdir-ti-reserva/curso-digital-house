const { Router } = require('express');
const routes  = Router();

const AuthController = require('./controllers/AuthController');

routes.post('/login', AuthController.index);
routes.post('/register', AuthController.store);

module.exports = routes;