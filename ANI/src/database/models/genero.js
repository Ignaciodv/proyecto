module.exports = (sequelize, dataTypes) =>{
    let alias = "genero";
    let cols = {
        id: {
        type: dataTypes.BIGINT(10).UNSIGNED,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    }, 
    
    name: {
        type: dataTypes.STRING(100),
        allowNull: false
    },

    let config = {
        timestamps: true,
        createdAt: "created_at",
        updatedAt: "updated_at",
        deletedAt: false
    }

    const genero = sequelize.define(alias, cols, config);

    genero,associate = function (models){
        genero.hasMany(models.pelis, {
            as: "pelis",
            foreignKey: "id_generos"
    })
    }
        
    };}