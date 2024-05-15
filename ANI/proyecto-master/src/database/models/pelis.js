module.exports = (sequelize, dataTypes) =>{
    let alias = "pelis";
    let cols = {
        id: {
        type: dataTypes.BIGINT(10).UNSIGNED,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    }, 
    
    title: {
        type: dataTypes.STRING(500),
        allowNull: false
    },
  
    descripcion: {
        type: dataTypes.STRING(500),
        allowNull: false
    },
  
    length: dataTypes.BIGINT(10),
    id_peicula: dataTypes.BIGINT(10)
    };
    
    let config = {
        timestamps: true,
        createdAt: "created_at",
        updatedAt: "updated_at",
        deletedAt: false
    }

    const pelis = sequelize.define(alias, cols, config);

    pelis.associate = function(models){
        pelis.belongsTo(models.genero, {
        as: "pelis",
        foreignKey: "id_genero"
    })
    }
    return pelis
    };