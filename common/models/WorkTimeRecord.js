const { DataTypes } = require("sequelize");

const WorkTimeRecordModel = {
  id : {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  project: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  worker: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  hours: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
};

module.exports = {
  initialise: (sequelize) => {
    this.model = sequelize.define("workTimeRecord", WorkTimeRecordModel);
  },

  createWorkTimeRecord: (workTimeRecord) => {
    return this.model.create(workTimeRecord);
  },

  findAllWorkTimeRecords: (query) => {
    return this.model.findAll({
      where: query
    });
  },

  // TODO
  // updateWorkTimeRecord: (query, updatedValue) => {
  //   return this.model.update(updatedValue, {
  //     where: query,
  //   });
  // },

  deleteWorkTimeRecord: (query) => {
    return this.model.destroy({
      where: query
    });
  }
};
