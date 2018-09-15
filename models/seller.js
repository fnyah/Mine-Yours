module.exports = function(sequelize, DataTypes) {
    var Sellers = sequelize.define("Sellers", {
      // Giving the Book model a name of type STRING
       name: DataTypes.STRING,
   
  
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