
  
module.exports = function(sequelize, DataTypes) {
    let burger = sequelize.define("burger", {
      
      burgertype: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      eaten: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      },
    };

    return burger;
  
  };