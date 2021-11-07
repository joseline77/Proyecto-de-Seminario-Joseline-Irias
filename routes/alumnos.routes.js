import { Router } from 'express';
import { createAlumno,deleteAlumno,getAlumnos,getbayid,updateAlumno} from '../controllers/alumnos.controller.js';
// import all controllers
// import SessionController from './app/controllers/SessionController';

const routes = new Router();

routes.post('/', createAlumno);
routes.post('/delete/:id', deleteAlumno);
routes.get('/', getAlumnos);
routes.get('/:id', getbayid);
routes.post('/update/:id', updateAlumno);
export default routes;
