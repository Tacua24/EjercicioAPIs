const express = require('express');
const router = express.Router();
const departamento = require('../controllers/departamento.controller.js');

router.post('/departamentos', departamento.create);
router.get('/departamentos', departamento.findAll);
router.get('/departamentos/:id_departamento', departamento.findOne);
router.put('/departamentos/:id_departamento', departamento.update);
router.delete('/departamentos/:id_departamento', departamento.delete);

//Empleados Router

const empleados = require("../controllers/empleado.controller.js");

router.post("/empleados", empleados.create);
router.get("/empleados", empleados.findAll);
router.get("/empleados/:id", empleados.findOne);
router.put("/empleados/:id", empleados.update);
router.delete("/empleados/:id", empleados.delete);


//Clientes Router

const cliente = require('../controllers/cliente.controller.js');

router.post('/clientes', cliente.create);
router.get('/clientes', cliente.findAll);
router.get('/clientes/:id_clientes', cliente.findOne);
router.put('/clientes/:id_clientes', cliente.update);
router.delete('clientes/:id_clientes', cliente.delete);

// Proveedores Router

const proveedor = require('../controllers/proveedor.controller.js');

router.post('/proveedores', proveedor.create);
router.get('/proveedores', proveedor.findAll);
router.get('/proveedores/:id_proveedor', proveedor.findOne);
router.put('/proveedores/:id_proveedor', proveedor.update);
router.delete('/proveedores/:id_proveedor', proveedor.delete);

// Productos Router

const producto = require('../controllers/producto.controller.js');

router.post('/productos', producto.create);
router.get('/productos', producto.findAll);
router.get('/productos/:id_producto', producto.findOne);
router.put('/productos/:id_producto', producto.update);
router.delete('/productos/:id_producto', producto.delete);

// Facturas Router

const factura = require('../controllers/factura.controller.js');

router.post('/facturas', factura.create);
router.get('/facturas', factura.findAll);
router.get('/facturas/:id_factura', factura.findOne);
router.put('/facturas/:id_factura', factura.update);
router.delete('/facturas/:id_factura', factura.delete);

// Detalle Factura Router

const facturaDetalle = require('../controllers/factura_detalle.controller.js');

router.post('/factura_detalle', facturaDetalle.create);
router.get('/factura_detalle', facturaDetalle.findAll);
router.get('/factura_detalle/:id_factura/:id_linea', facturaDetalle.findOne);
router.put('/factura_detalle/:id_factura/:id_linea', facturaDetalle.update);
router.delete('/factura_detalle/:id_factura/:id_linea', facturaDetalle.delete);

module.exports = router;