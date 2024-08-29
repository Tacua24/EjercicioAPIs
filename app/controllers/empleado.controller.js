const db = require("../config/db.config.js");
const Empleado = db.Empleados;
    
// Crear y guardar un nuevo empleado
exports.create = (req, res) => {
    if (!req.body.PrimerNombre) {
        res.status(400).send({
            message: "El contenido no puede estar vacío."
        });
        return;
    }

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

// Obtener todos los empleados
exports.findAll = (req, res) => {
    Empleado.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Ocurrió un error al obtener los empleados."
            });
        });
};

// Obtener un solo empleado por ID
exports.findOne = (req, res) => {
    const id = req.params.id_empleado;

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
                message: `Error al obtener el Empleado con id=${id}.`
            });
        });
};

// Actualizar un empleado por ID
exports.update = (req, res) => {
    const id = req.params.id_empleado;

    Empleado.update(req.body, {
        where: { id_empleado: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Empleado actualizado exitosamente."
                });
            } else {
                res.send({
                    message: `No se puede actualizar el Empleado con id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: `Error al actualizar el Empleado con id=${id}.`
            });
        });
};

// Eliminar un empleado por ID
exports.delete = (req, res) => {
    const id = req.params.id_empleado;

    Empleado.destroy({
        where: { id_empleado: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Empleado eliminado exitosamente."
                });
            } else {
                res.send({
                    message: `No se puede eliminar el Empleado con id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: `Error al eliminar el Empleado con id=${id}.`
            });
        });
};
