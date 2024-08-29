const express = require('express');
const router = express.Router();
const departamento = require('../controllers/departamento.controller.js');

router.post('/departamentos', departamento.create);
router.get('/departamentos', departamento.findAll);
router.get('/departamentos/:id_departamento', departamento.findOne);
router.put('/departamentos/:id_departamento', departamento.update);
router.delete('/departamentos/:id_departamento', departamento.delete);

module.exports = router;