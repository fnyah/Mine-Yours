module.exports = function(sequelize, DataTypes) {
    var Carts = sequelize.define("Carts", {
      title: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          len: [1,255]
        }
      },
      description:{
        type: DataTypes.STRING,
        allowNull: true,
      },
      imageURL: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      authors: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      price:{
        type: DataTypes.DECIMAL,
        allowNull:true

      },
      condition:{
        type: DataTypes.STRING,
        allowNull:true,
        defaultValue:"as-new"


      }
    
    
    });
  
    Carts.associate = function(models) {
      // We're saying that a book should belong to an Owner
      // A book can't be created without an Owner due to the foreign key constraint
      Carts.belongsTo(models.Sellers, {
        foreignKey: {
          allowNull: true
        }
      });
    };
    return Carts;
  };
  