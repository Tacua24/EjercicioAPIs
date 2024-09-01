const db = require('../config/db.config.js');
const Empleado = db.Empleado;

// Crear y guardar un nuevo Empleado
exports.create = (req, res) => {
    // Validar request
    if (!req.body.PrimerNombre || !req.body.PrimerApellido) {
        res.status(400).send({
            message: "El contenido no puede estar vacío!"
        });
        return;
    }

    // Crear un Empleado
    const empleado = {
        id_empleado: req.body.id_empleado,
        PrimerNombre: req.body.PrimerNombre,
        SegundoNombre: req.body.SegundoNombre,
        PrimerApellido: req.body.PrimerApellido,
        SegundoApellido: req.body.SegundoApellido,
        Nit: req.body.Nit,
        Salario: req.body.Salario,
        Estatus: req.body.Estatus,
        id_departamento: req.body.id_departamento
    };

    // Guardar Empleado en la base de datos
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

// Obtener todos los Empleados
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

// Obtener un Empleado por id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Empleado.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `No se encontró un Empleado con id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error al recuperar el Empleado con id=" + id
            });
        });
};

// Actualizar un Empleado por id
exports.update = (req, res) => {
    const id = req.params.id;

    Empleado.update(req.body, {
        where: { id_empleado: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "El Empleado fue actualizado correctamente."
                });
            } else {
                res.send({
                    message: `No se pudo actualizar el Empleado con id=${id}. Tal vez el Empleado no fue encontrado o el body está vacío!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error al actualizar el Empleado con id=" + id
            });
        });
};

// Eliminar un Empleado por id
exports.delete = (req, res) => {
    const id = req.params.id;

    Empleado.destroy({
        where: { id_empleado: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "El Empleado fue eliminado correctamente!"
                });
            } else {
                res.send({
                    message: `No se pudo eliminar el Empleado con id=${id}. Tal vez el Empleado no fue encontrado!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "No se pudo eliminar el Empleado con id=" + id
            });
        });
};