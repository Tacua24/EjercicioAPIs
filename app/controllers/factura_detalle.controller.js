const db = require('../config/db.config.js');
const FacturaDetalle = db.factura_detalle;

exports.create = (req, res) => {
    if (!req.body.id_factura || !req.body.id_linea || !req.body.id_producto || !req.body.cantidad) {
        res.status(400).send({ message: "El contenido no puede estar vacío!" });
        return;
    }

    const facturaDetalle = {
        id_factura: req.body.id_factura,
        id_linea: req.body.id_linea,
        id_producto: req.body.id_producto,
        cantidad: req.body.cantidad
    };

    FacturaDetalle.create(facturaDetalle)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Ocurrió un error al crear el detalle de la factura."
            });
        });
};

exports.findAll = (req, res) => {
    FacturaDetalle.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Ocurrió un error al recuperar los detalles de las facturas."
            });
        });
};

exports.findOne = (req, res) => {
    const { id_factura, id_linea } = req.params;

    FacturaDetalle.findOne({ where: { id_factura: id_factura, id_linea: id_linea } })
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `No se puede encontrar el detalle de la factura con ID Factura=${id_factura} y ID Línea=${id_linea}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error recuperando el detalle de la factura con ID Factura=" + id_factura + " y ID Línea=" + id_linea
            });
        });
};

exports.update = (req, res) => {
    const { id_factura, id_linea } = req.params;

    FacturaDetalle.update(req.body, {
        where: { id_factura: id_factura, id_linea: id_linea }
    })
        .then(num => {
            if (num[0] === 1) {
                res.send({
                    message: "El detalle de la factura fue actualizado correctamente."
                });
            } else {
                res.send({
                    message: `No se puede actualizar el detalle de la factura con ID Factura=${id_factura} y ID Línea=${id_linea}. Puede que el detalle no se haya encontrado o que req.body esté vacío.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error actualizando el detalle de la factura con ID Factura=" + id_factura + " y ID Línea=" + id_linea
            });
        });
};

exports.delete = (req, res) => {
    const { id_factura, id_linea } = req.params;

    FacturaDetalle.destroy({
        where: { id_factura: id_factura, id_linea: id_linea }
    })
        .then(num => {
            if (num === 1) {
                res.send({
                    message: "El detalle de la factura fue eliminado correctamente!"
                });
            } else {
                res.send({
                    message: `No se puede eliminar el detalle de la factura con ID Factura=${id_factura} y ID Línea=${id_linea}. Puede que el detalle no se haya encontrado.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "No se pudo eliminar el detalle de la factura con ID Factura=" + id_factura + " y ID Línea=" + id_linea
            });
        });
};