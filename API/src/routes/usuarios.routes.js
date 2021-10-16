
const express = require('express');
const router = express.Router();

const mysqlConnection = require('../../db/db');

//GET ALL
router.get('/usuarios', (req, res) => {
  //query = consulta
  mysqlConnection.query('SELECT * FROM Usuarios', (err, rows, fields) => {
    if (!err) {
      res.json(rows);
    } else {
      console.log(err);
    }
  });
});

//GET BY ID
router.get('/usuarios/:idUsuario', (req, res) => {
  const { idUsuario } = req.params;

  mysqlConnection.query(
    'SELECT * FROM Usuarios WHERE idUsuario = ?',
    [idUsuario],
    (err, rows, fields) => {
      if (!err) {
        res.json(rows[0]);
      } else {
        console.log(err);
      }
    }
  );
});

//POST

router.post('/usuarios/create', (req, res) => {
  const sql = 'INSERT INTO Usuarios SET ?';

  const usuariosObject = {
    usu_nombre: req.body.nameUser,
    usu_apellido: req.body.lastNameUser,
    email: req.body.emailUser
  };

  mysqlConnection.query(sql, usuariosObject, (err, rows, fields) => {
    if (!err) {
      res.json({ Status: 'Usuario creado. (API)' });
    } else {
      console.log(err);
    }
  });
});

/*
router.post('/create', (req, res) => {
  const {
    idProducto,
    descripcion_producto,
    precio_producto,
    cantidad_producto,
    idEstado,
  } = req.body;
  console.log(req.body);
  mysqlConnection.query(
    'INSERT INTO Productos (idProducto, descripcion_producto, precio_producto, cantidad_producto, idEstado) VALUES (?, ?, ?, ?, ?)',
    [
      idProducto,
      descripcion_producto,
      precio_producto,
      cantidad_producto,
      idEstado,
    ],
    (err, rows, fields) => {
      if (!err) {
        res.json({ Status: 'Producto creado. (API)' });
      } else {
        console.log(err);
      }
    }
  );
});
*/
//UPDATE
router.patch('/usuarios/update/:idUsuario', (req, res) => {
    //Get the param
    const { idUsuario } = req.params;
  
    //Get the body
    const { descripcion_producto, precio_producto, cantidad_producto, idEstado } =
      req.body;
  
    mysqlConnection.query(
      'UPDATE Productos SET descripcion_producto = ?, precio_producto = ?, cantidad_producto = ?, idEstado = ? WHERE idProducto = ?',
      [
        descripcion_producto,
        precio_producto,
        cantidad_producto,
        idEstado,
        idProducto,
      ],
      (err, rows, fields) => {
        if (!err) {
          res.json({ Status: 'Producto actualizado.' });
        } else {
          console.log(err);
        }
      }
    );
  });
  
  //DELETE
  router.delete('/productos/delete/:idProducto', (req, res) => {
    const { idProducto } = req.params;
    mysqlConnection.query(
      'DELETE FROM Productos WHERE idProducto = ?',
      [idProducto],
      (err, rows, fields) => {
        if (!err) {
          res.json({ status: 'Producto eliminado.' });
        } else {
          console.log(err);
        }
      }
    );
  });
  
  module.exports = router;
  