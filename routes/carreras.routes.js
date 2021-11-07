import { Router } from 'express';
import { getCarreras, getCarrera, createCarrera, updateCarrera, deleteCarrera } from '../controllers/carreras.controller.js';

const routes = new Router();

routes.get('/', getCarreras);
routes.get('/:id', getCarrera);
routes.post('/', createCarrera);
routes.post('/:id', updateCarrera);
routes.post('/delete/:id', deleteCarrera);

export default routes;