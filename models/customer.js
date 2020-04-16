
  
module.exports = function(sequelize, DataTypes) {
    let customer = sequelize.define("customer", {
      
      customer_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      eaten: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      }, 
      
    };
     return customer;
  
  };