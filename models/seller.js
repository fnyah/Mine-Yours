module.exports = function(sequelize, DataTypes) {
    var Sellers = sequelize.define("Sellers", {
      // Giving the Book model a name of type STRING
      name: {
        type: DataTypes.STRING,
        allowNull: true

      },
      title:{
        type: DataTypes.STRING,
        allowNull: true
      },
  
      authors: {
        type: DataTypes.STRING,
        allowNull: true
      },
      price:{
        type: DataTypes.DECIMAL,
        allowNull:true

      },
      condition:{
        type: DataTypes.STRING,
        allowNull:true,
        defaultValue:"Excellent"
      },

      location:{
        type: DataTypes.STRING,
        allowNull:true,
        defaultValue:"Toronto"
      }

   
  
    });
  
    Sellers.associate = function(models) {
      // Associating Awnor with Books
      // When seller is deleted, also delete any associated Books
      Sellers.hasMany(models.Books, {
        onDelete: "cascade"
      });
    };
  
    return Sellers;
  };