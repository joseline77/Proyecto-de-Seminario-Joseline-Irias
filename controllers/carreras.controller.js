import db from '../database/connection.js';
//table: carreras
/**
* CREATE TABLE `carrera` (
*   `IdCarrera` int(3) NOT NULL,
*   `NombreCarrera` varchar(50) NOT NULL,
*   `Descripcion` varchar(100) NOT NULL
* ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
*/

export const getCarreras = (req, res) => {
    try {
        let sql = "SELECT * FROM carrera";
        db.query(sql, (err, result) => {
            if (err) {
                res.status(500).send(err);
            } else {
                res.render('carrera' , {
                    carreras: result
                })
            }
        });
    } catch (error) {
        res.status(500).send(error);
    }
}

export const getCarrera = (req, res) => {
    try {
        const { id } = req.params;
        let sql = "SELECT * FROM carrera WHERE IdCarrera = ?";
        db.query(sql, [id], (err, result) => {
            if (err) {
                res.status(500).send(err);
            } else {
                res.render('carrera', { carrera: result[0] });
            }
        });
    } catch (error) {
        res.status(500).send(error);
    }
}

export const createCarrera = (req, res) => {
    try {
        console.log(req.body);
        const { nombre, descripcion } = req.body;
        let sql = "INSERT INTO carrera (NombreCarrera, Descripcion) VALUES (?,?)";
        db.query(sql, [nombre, descripcion], (err, result) => {
            if (err) {
                res.status(500).send(err);
            } else {
                res.redirect('/carreras');
            }
        });
    } catch (error) {
        res.status(500).send(error);
    }
}

export const updateCarrera = (req, res) => {
    try {
        const { id } = req.params;
        const { NombreCarrera, Descripcion } = req.body;
        let sql = "UPDATE carrera SET NombreCarrera = ?, Descripcion = ? WHERE IdCarrera = ?";
        db.query(sql, [NombreCarrera, Descripcion, id], (err, result) => {
            if (err) {
                res.status(500).send(err);
            } else {
                res.redirect(`/carreras`);
            }
        });

    } catch (error) {
        
    }
}


export const deleteCarrera = (req, res) => {
    try {
        const { id } = req.params;
        let sql = "DELETE FROM carrera WHERE IdCarrera = ?";
        db.query(sql, [id], (err, result) => {
            if (err) {
                res.status(500).send(err);
            } else {
                res.redirect('/carreras');
            }
        });
    } catch (error) {
        res.status(500).send(error);
    }
}