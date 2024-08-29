const db = require('../config/db.config.js');
const Empleado = db.Empleado;

// Create and Save a new Empleado
exports.create = (req, res) => {
  if (!req.body.PrimerNombre || !req.body.SegundoNombre || !req.body.PrimerApellido || !req.body.SegundoApellido || !req.body.Nit || !req.body.Salario || !req.body.Estatus || !req.body.id_departamento) {
    return res.status(400).send({
      message: "Todos los campos son obligatorios"
    });
  }

  const empleado = {
    id_empleado: req.body.id_empleado,
    PrimerNombre: req.body.PrimerNombre,
    SegundoNombre: req.body.SegundoNombre,
    PrimerApellido: req.body.PrimerApellido,
    SegundoApellido: req.body.SegundoApellido,
    Nit: req.body.
    Salario: req.body.Salario,
    Estatus: req.body.Estatus,
    id_departamento: req.body.id_departamento,
  };

  Empleado.create(empleado)
   .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Ocurrió un error al crear el Empleado."
      });
    });
};

// Retrive all Empleados
exports.findAll = (req, res) => {
  Empleado.findAll()
   .then(data => {
      res.send(data);
    })
   .catch(err => {
      res.status(500).send({
        message: err.message || "Ocurrió un error al recuperar los Empleados."
      });
    });
};

// Find a single Empleado by ID
exports.findOne = (req, res) => {
    const id = req.params.id_empleado;

    Empleado.findByPk(id)
   .then(data => {
     if (data) {
       res.send(data);
     } else {
       res.status(404).send({
         message: `No se encontró el Empleado con id=${id}.`
       });
     }
   })
   .catch(err => {
     res.status(500).send({
       message: err.message || `Error al recuperar el Empleado con id=${id}.`
     });
   });
}

// Update a Empleado by the id in the request
exports.update = (req, res) => {
    const id = req.params.id_empleado;

    Empleado.update(req.body, {
      where: { id_empleado: id }
    })
   .then(num => {
     if (num == 1) {
       res.send({
         message: "Empleado actualizado con éxito."
       });
     } else {
       res.send({
         message: `No se pudo actualizar el Empleado con id=${id}. Tal vez el Empleado no fue encontrado o el req.body está vacío.`
       });
     }
   })
}

// Delete a Empleado by the id in the request
exports.delete = (req, res) => {
  const id = req.params.id_empleado;

  Empleado.destroy({
    where: { id_empleado: id }
  })
  .then(num => {
    if (num == 1) {
      res.send({
        message: "Empleado eliminado con éxito."
      });
    } else {
      res.send({
        message: `No se pudo eliminar el Empleado con id=${id}. Tal vez el Empleado no fue encontrado.`
      });
    }
  })
  .catch(err => {
    res.status(500).send({
      message: err.message || `Error al eliminar el Empleado con id=${id}.`
    });
  });
};