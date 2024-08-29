const express = require('express');
const router = express.Router();
const departamento = require('../controllers/departamento.controller.js');

router.post('/departamentos', departamento.create);
router.get('/departamentos', departamento.findAll);
router.get('/departamentos/:id_departamento', departamento.findOne);
router.put('/departamentos/:id_departamento', departamento.update);
router.delete('/departamentos/:id_departamento', departamento.delete);

module.exports = router;

//Empleados Router

const empleado = require('../controllers/empleado.controller.js');

router.post('/empleados', empleado.create);
router.get('/empleados', empleado.findAll);
router.get('/empleados/:id_empleado', empleado.findOne);
router.put('/empleados/:id_empleado', empleado.update);
router.delete('/empleados/:id_empleado', empleado.delete);

//Clientes Router

const cliente = require('../controllers/cliente.controller.js');

router.post('/clientes', cliente.create);
router.get('/clientes', cliente.findAll);
router.get('/clientes/:id_clientes', cliente.findOne);
router.put('/clientes/:id_clientes', cliente.update);
router.delete('clientes/:id_clientes', cliente.delete);