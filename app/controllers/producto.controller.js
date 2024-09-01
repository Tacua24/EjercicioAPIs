const db = require('../config/db.config.js');
const Producto = db.Producto;

exports.create = (req, res) => {
    if (!req.body.Descripcion) {
        res.status(400).send({ message: "El contenido no puede estar vacío!" });
        return;
    }

    const producto = {
        id_producto: req.body.id_producto,
        Descripcion: req.body.Descripcion,
        Stock: req.body.Stock,
        StockMinimo: req.body.StockMinimo,
        PrecioUnitario: req.body.PrecioUnitario,
        Estatus: req.body.Estatus
    };

    Producto.create(producto)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Ocurrió un error al crear el Producto."
            });
        });
};

exports.findAll = (req, res) => {
    Producto.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Ocurrió un error al recuperar los productos."
            });
        });
};

exports.findOne = (req, res) => {
    const id = req.params.id;

    Producto.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `No se puede encontrar el Producto con id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error recuperando el Producto con id=" + id
            });
        });
};

exports.update = (req, res) => {
    const id = req.params.id;

    Producto.update(req.body, {
        where: { id_producto: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "El Producto fue actualizado correctamente."
                });
            } else {
                res.send({
                    message: `No se puede actualizar el Producto con id=${id}. Puede que el Producto no se haya encontrado o que req.body esté vacío.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error actualizando el Producto con id=" + id
            });
        });
};

exports.delete = (req, res) => {
    const id = req.params.id;

    Producto.destroy({
        where: { id_producto: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "El Producto fue eliminado correctamente!"
                });
            } else {
                res.send({
                    message: `No se puede eliminar el Producto con id=${id}. Puede que el Producto no se haya encontrado.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "No se pudo eliminar el Producto con id=" + id
            });
        });
};