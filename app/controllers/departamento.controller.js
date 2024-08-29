const db = require('../config/db.config.js');
const Departamento = db.Departamento;

// Create and Save a new Departamento
exports.create = (req, res) => {
  if (!req.body.descripcion) {
    return res.status(400).send({
      message: "La descripción no puede estar vacía"
    });
  }

  const departamento = {
    id_departamento: req.body.id_departamento,
    descripcion: req.body.descripcion,
  };

  Departamento.create(departamento)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Ocurrió un error al crear el Departamento."
      });
    });
};

// Retrieve all Departamentos
exports.findAll = (req, res) => {
  Departamento.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Ocurrió un error al recuperar los Departamentos."
      });
    });
};

// Find a single Departamento by Id
exports.findOne = (req, res) => {
  const id = req.params.id_departamento;

  Departamento.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `No se encontró el Departamento con id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || `Error al recuperar el Departamento con id=${id}.`
      });
    });
};

// Update a Departamento by the id in the request
exports.update = (req, res) => {
  const id = req.params.id_departamento;

  Departamento.update(req.body, {
    where: { id_departamento: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Departamento actualizado con éxito."
        });
      } else {
        res.send({
          message: `No se pudo actualizar el Departamento con id=${id}. Tal vez el Departamento no fue encontrado o el req.body está vacío.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || `Error al actualizar el Departamento con id=${id}.`
      });
    });
};

// Delete a Departamento by the id in the request
exports.delete = (req, res) => {
  const id = req.params.id_departamento;

  Departamento.destroy({
    where: { id_departamento: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Departamento eliminado con éxito."
        });
      } else {
        res.send({
          message: `No se pudo eliminar el Departamento con id=${id}. Tal vez el Departamento no fue encontrado.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || `No se pudo eliminar el Departamento con id=${id}.`
      });
    });
};