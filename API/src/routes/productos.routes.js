const express = require('express');
const router = express.Router();

const mysqlConnection = require('../../db/db');

//GET ALL
router.get('/productos', (req, res) => {
  //query = consulta
  mysqlConnection.query(
    `SELECT idProducto, descripcion_producto, precio_producto, cantidad_producto, idEstado,
    CASE
    WHEN idEstado = 1 THEN 'Activo'
    WHEN idEstado = 0 THEN 'Inactivo'
    END AS idEstadoToString
    FROM Productos`,
    (err, rows, fields) => {
      if (!err) {
        res.json(rows);
      } else {
        console.log(err);
      }
    }
  );
});

//GET BY ID
router.get('/productos/:idProducto', (req, res) => {
  const { idProducto } = req.params;
  console.log(idProduct);
  mysqlConnection.query(
    'SELECT * FROM Productos WHERE idProducto = ?',
    [idProducto],
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

router.post('/productos/create', (req, res) => {
  const sql = 'INSERT INTO Productos SET ?';

  const productosObject = {
    idProducto: req.body.idProduct,
    descripcion_producto: req.body.description,
    precio_producto: req.body.price,
    cantidad_producto: req.body.quantity,
    idEstado: req.body.state,
  };

  mysqlConnection.query(sql, productosObject, (err, rows, fields) => {
    if (!err) {
      res.json({ Status: 'Producto creado. (API)' });
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
router.patch('/productos/update/:idProducto', (req, res) => {
  //Get the param
  const { idProducto } = req.params;

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
