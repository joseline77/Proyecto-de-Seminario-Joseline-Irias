
import express from 'express';
import './loadEnv.js';
import routesAlumnos from './routes/alumnos.routes.js';
import routesCarrera from './routes/carreras.routes.js';
const app = express()
const port = process.env.PORT || 3000

app.use(express.static('public'))
app.use(express.urlencoded({extended:true}));
app.set('view engine', 'pug');
app.use('/alumnos',routesAlumnos)
app.use('/carreras',routesCarrera)
app.use(express.json())
app.listen(port , ()=> console.log('> Server is up and running on port : http://localhost:' + port))