module.exports = (sequelize, Sequelize) => {
    const Proveedor = sequelize.define('proveedor', {
        id_proveedor: {
            type: Sequelize.NUMERIC,
            primaryKey: true,
        },
        Empresa: {
            type: Sequelize.STRING(100)
        },
        Direccion: {
            type: Sequelize.STRING(100)
        },
        Telefono: {
            type: Sequelize.NUMERIC
        },
        Nit: {
            type: Sequelize.STRING(30)
        },
        Ciudad: {
            type: Sequelize.STRING(100)
        },
        Pais: {
            type: Sequelize.STRING(100)
        },
        Contacto: {
            type: Sequelize.STRING(100)
        },
        Email: {
            type: Sequelize.STRING(100)
        },
        TelefonoContacto: {
            type: Sequelize.NUMERIC
        },
        Estatus: {
            type: Sequelize.NUMERIC
        }
    });

    return Proveedor;
};