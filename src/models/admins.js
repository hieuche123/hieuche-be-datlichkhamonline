"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Admin extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Admin.belongsTo(models.Allcode, {
        foreignKey: "positionId",
        targetKey: "keyMap",
        as: "positionData",
      });
      Admin.belongsTo(models.Allcode, {
        foreignKey: "gender",
        targetKey: "keyMap",
        as: "genderData",
      });
      Admin.hasOne(models.Markdown, { foreignKey: "doctorId" });
      Admin.hasOne(models.Doctor_Infor, { foreignKey: "doctorId" });
      Admin.hasMany(models.Schedule, {
        foreignKey: "doctorId",
        as: "doctorData",
      });
      Admin.hasMany(models.History, {
        foreignKey: "doctorId",
        as: "doctorDataHistory",
      });
      Admin.hasMany(models.Booking, {
        foreignKey: "patientId",
        as: "patientData",
      });
      Admin.hasMany(models.Invoice, {
        foreignKey: "doctorId",
        as: "doctorDataInvoice",
      });
      Admin.hasMany(models.Invoice, {
        foreignKey: "patientId",
        as: "patientDataInvoice",
      });
    }
  }
  Admin.init(
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      address: DataTypes.STRING,
      phonenumber: DataTypes.STRING,
      gender: DataTypes.STRING,
      image: DataTypes.TEXT,
      roleId: DataTypes.STRING,
      positionId: DataTypes.STRING,
      tokenAdmin: DataTypes.STRING,
      status:DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: "Admin",
    }
  );
  return Admin;
};
