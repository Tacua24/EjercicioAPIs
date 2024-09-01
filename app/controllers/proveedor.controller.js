const db = require('../config/db.config.js');
const Proveedor = db.Proveedor;

exports.create = (req, res) => {
    if (!req.body.Empresa) {
        res.status(400).send({ message: "El contenido no puede estar vacío!" });
        return;
    }

    const proveedor = {
        id_proveedor: req.body.id_proveedor,
        Empresa: req.body.Empresa,
        Direccion: req.body.Direccion,
        Telefono: req.body.Telefono,
        Nit: req.body.Nit,
        Ciudad: req.body.Ciudad,
        Pais: req.body.Pais,
        Contacto: req.body.Contacto,
        Email: req.body.Email,
        TelefonoContacto: req.body.TelefonoContacto,
        Estatus: req.body.Estatus
    };

    Proveedor.create(proveedor)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Ocurrió un error al crear el Proveedor."
            });
        });
};

exports.findAll = (req, res) => {
    Proveedor.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Ocurrió un error al recuperar los proveedores."
            });
        });
};

exports.findOne = (req, res) => {
    const id = req.params.id;

    Proveedor.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `No se puede encontrar el Proveedor con id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error recuperando el Proveedor con id=" + id
            });
        });
};

exports.update = (req, res) => {
    const id = req.params.id;

    Proveedor.update(req.body, {
        where: { id_proveedor: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "El Proveedor fue actualizado correctamente."
                });
            } else {
                res.send({
                    message: `No se puede actualizar el Proveedor con id=${id}. Puede que el Proveedor no se haya encontrado o que req.body esté vacío.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error actualizando el Proveedor con id=" + id
            });
        });
};

exports.delete = (req, res) => {
    const id = req.params.id;

    Proveedor.destroy({
        where: { id_proveedor: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "El Proveedor fue eliminado correctamente!"
                });
            } else {
                res.send({
                    message: `No se puede eliminar el Proveedor con id=${id}. Puede que el Proveedor no se haya encontrado.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "No se pudo eliminar el Proveedor con id=" + id
            });
        });
};
