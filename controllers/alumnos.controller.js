import db from "../database/connection.js";

// table: alumnos
/** 
* CREATE TABLE `alumno` (
*   `IdAlumno` int(11) NOT NULL,
*   `Nombre` varchar(30) NOT NULL,
*   `Apellido` varchar(30) NOT NULL,
*   `Telefono` int(12) NOT NULL,
*   `IdCarrera` int(3) NOT NULL,
*   `Estado` int(1) NOT NULL,
* ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
*/

export const getAlumnos = (req, res) => {
  try {
    let sql = "SELECT * FROM alumno";
    db.query(sql, (err, result) => {
      if (err) {
        res.status(500).send({ message: err });
      } else {
        sql = "SELECT * FROM carrera";
        db.query(sql, (err, result2) => {
          if (err) {
            res.status(500).send({ message: err });
          } else {
            res.render('alumno',{
              alumnos: result,
              carreras: result2
            });
          }
        })
        
      }
    });
  } catch (error) {
    res.status(500).send({ message: error });    
  }
}

export const getbayid = (req, res) => {
  try {
    const { id } = req.params;
    let sql = "SELECT * FROM alumno WHERE IdAlumno = ?";
    db.query(sql, [id], (err, result) => {
      if (err) {
        res.status(500).send({ message: err });
      } else {
        res.render("alumno", { alumnos: result });
      }
    });
  } catch (error) {
    res.status(500).send({ message: error });    
  }
}

export const updateAlumno = (req,res) => {
  try {
    const { id } = req.params;
    const { nombre, apellido, telefono, idcarrera, estado } = req.body;
    if(nombre == "" || apellido == "" || telefono == "" || idcarrera == "" || estado == "") return res.status(500).send({ message: "Todos los campos son obligatorios" });
    let sql = "UPDATE alumno SET Nombre = ?, Apellido = ?, Telefono = ?, IdCarrera = ?, Estado = ? WHERE IdAlumno = ?";
    db.query(sql, [nombre, apellido, telefono, idcarrera, estado, id], (err, result) => {
      if (err) {
        res.status(500).send({ message: err });
      } else {
        res.redirect("/alumnos");
      }
    });
  } catch (error) {
    
  }
}

export const createAlumno = (req,res) => {
  try {
    const { nombre, apellido, telefono, idcarrera, estado } = req.body;
    if(nombre == "" || apellido == "" || telefono == "" || idcarrera == "" || estado == "") return res.status(500).send({ message: "Todos los campos son obligatorios" });
    let sql = "INSERT INTO alumno (Nombre, Apellido, Telefono, IdCarrera, Estado) VALUES (?,?,?,?,?)";
    db.query(sql, [nombre, apellido, telefono, idcarrera, estado], (err, result) => {
      if (err) {
        res.status(500).send({ message: err });
      } else {
        res.redirect("/alumnos");
      }
    });
  } catch (error) {
    res.status(500).send({ message: error });
  }
}

export const deleteAlumno = (req,res) => {
  try {
    const { id } = req.params;
    let sql = "DELETE FROM alumno WHERE IdAlumno = ?";
    db.query(sql, [id], (err, result) => {
      if (err) {
        res.status(500).send({ message: err });
      } else {
        res.redirect("/alumnos");
      }
    });
  } catch (error) {
    res.status(500).send({ message: error });
  }
}
