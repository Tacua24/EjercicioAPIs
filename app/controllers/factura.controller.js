const db = require('../config/db.config.js');
const Factura = db.factura;

exports.create = (req, res) => {
    if (!req.body.no_fact || !req.body.serie) {
        res.status(400).send({ message: "El contenido no puede estar vacío!" });
        return;
    }

    const factura = {
        id_factura: req.body.id_factura,
        no_fact: req.body.no_fact,
        serie: req.body.serie,
        id_cliente: req.body.id_cliente,
        id_empleado: req.body.id_empleado,
        fecha_fac: req.body.fecha_fac
    };

    Factura.create(factura)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Ocurrió un error al crear la factura."
            });
        });
};

exports.findAll = (req, res) => {
    Factura.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Ocurrió un error al recuperar las facturas."
            });
        });
};

exports.findOne = (req, res) => {
    const id = req.params.id;

    Factura.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `No se puede encontrar la factura con id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error recuperando la factura con id=" + id
            });
        });
};

exports.update = (req, res) => {
    const id = req.params.id;

    Factura.update(req.body, {
        where: { id_factura: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "La factura fue actualizada correctamente."
                });
            } else {
                res.send({
                    message: `No se puede actualizar la factura con id=${id}. Puede que la factura no se haya encontrado o que req.body esté vacío.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error actualizando la factura con id=" + id
            });
        });
};

exports.delete = (req, res) => {
    const id = req.params.id;

    Factura.destroy({
        where: { id_factura: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "La factura fue eliminada correctamente!"
                });
            } else {
                res.send({
                    message: `No se puede eliminar la factura con id=${id}. Puede que la factura no se haya encontrado.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "No se pudo eliminar la factura con id=" + id
            });
        });
};
