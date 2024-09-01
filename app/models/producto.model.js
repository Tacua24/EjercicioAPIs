module.exports = (sequelize, Sequelize) => {
    const Producto = sequelize.define('Producto', {
        id_producto: {
            type: Sequelize.NUMERIC,
            primaryKey: true
        },
        Descripcion: {
            type: Sequelize.STRING(100)
        },
        Stock: {
            type: Sequelize.NUMERIC
        },
        StockMinimo: {
            type: Sequelize.NUMERIC
        },
        PrecioUnitario: {
            type: Sequelize.FLOAT
        },
        Estatus: {
            type: Sequelize.NUMERIC
        }
    });

    return Producto;
};