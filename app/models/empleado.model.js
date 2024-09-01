module.exports = (sequelize, Sequelize) => {
    const Empleado = sequelize.define('empleado', {
        id_empleado: {
            type: Sequelize.NUMERIC,
            primaryKey: true,
        },
        PrimerNombre: {
            type: Sequelize.STRING(100)
        },
        SegundoNombre: {
            type: Sequelize.STRING(100)
        },
        PrimerApellido: {
            type: Sequelize.STRING(100)
        },
        SegundoApellido: {
            type: Sequelize.STRING(100)
        },
        Nit: {
            type: Sequelize.STRING(10)
        },
        Salario: {
            type: Sequelize.NUMERIC
        },
        Estatus: {
            type: Sequelize.NUMERIC
        },
        id_departamento: {
            type: Sequelize.NUMERIC
        }
    });

    return Empleado;
};