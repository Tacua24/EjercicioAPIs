const db = require('../config/db.config.js');
const Cliente = db.Cliente;

// Create and Save a new Cliente
exports.create = (req, res) => {
  if (!req.body.nombre || !req.body.apellido || !req.body.nit || !req.body.direccion || !req.body.estatus) {
    return res.status(400).send({
      message: "Los campos obligatorios no pueden estar vacíos"
    });
  }

  const cliente = {
    id_cliente: req.body.id_cliente,
    nombre: req.body.nombre,
    apellido: req.body.apellido,
    razon_social: req.body.razon_social || null,
    nit: req.body.nit,
    direccion: req.body.direccion,
    telefono: req.body.telefono || null,
    email: req.body.email || null,
    fecha_ingreso: req.body.fecha_ingreso || new Date(),
    estatus: req.body.estatus
  };

  Cliente.create(cliente)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Ocurrió un error al crear el Cliente."
      });
    });
};

// Retrieve all Clientes
exports.findAll = (req, res) => {
  Cliente.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Ocurrió un error al recuperar los Clientes."
      });
    });
};

// Find a single Cliente by Id
exports.findOne = (req, res) => {
  const id = req.params.id_cliente;

  Cliente.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `No se encontró el Cliente con id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || `Error al recuperar el Cliente con id=${id}.`
      });
    });
};

// Update a Cliente by the id in the request
exports.update = (req, res) => {
  const id = req.params.id_cliente;

  Cliente.update(req.body, {
    where: { id_cliente: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Cliente actualizado con éxito."
        });
      } else {
        res.send({
          message: `No se pudo actualizar el Cliente con id=${id}. Tal vez el Cliente no fue encontrado o el req.body está vacío.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || `Error al actualizar el Cliente con id=${id}.`
      });
    });
};

// Delete a Cliente by the id in the request
exports.delete = (req, res) => {
  const id = req.params.id_cliente;

  Cliente.destroy({
    where: { id_cliente: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Cliente eliminado con éxito."
        });
      } else {
        res.send({
          message: `No se pudo eliminar el Cliente con id=${id}. Tal vez el Cliente no fue encontrado.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || `No se pudo eliminar el Cliente con id=${id}.`
      });
    });
};