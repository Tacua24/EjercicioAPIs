module.exports = (sequelize, Sequelize) => {
    const Departamento = sequelize.define('departamento', {
        id_departamento: {
            type: Sequelize.NUMERIC,
            primaryKey: true,
        },
        Descripcion: {
            type: Sequelize.STRING(80)
        }
    });

    return Departamento;
}