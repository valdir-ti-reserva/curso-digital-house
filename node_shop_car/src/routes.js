const { Router } = require('express');
const routes = Router();

const AuthController = require('./controllers/AuthController');
const UserController = require('./controllers/UserController');
const CarController = require('./controllers/CarController');

const authMiddleware = require('./middlewares/Auth');

routes.post('/login', AuthController.index);
routes.post('/register', AuthController.store);

routes.use(authMiddleware);
routes.get('/users/:id', UserController.show);
routes.get('/users', UserController.index);
routes.post('/users', UserController.store);
routes.delete('/users/:id', UserController.delete);
routes.put('/users/:id', UserController.update);

routes.get('/cars/:id', CarController.show);
routes.get('/cars', CarController.index);
routes.post('/cars', CarController.store);
routes.delete('/cars/:id', CarController.delete);
routes.put('/cars/:id', CarController.update);

module.exports = routes;
