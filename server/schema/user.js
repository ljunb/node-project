const sequelize = require('../config/db')
const Sequelize = require('sequelize')

const user = sequelize.define('user', {
  id: {
    type: Sequelize.INTEGER(11),
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  user_name: {
    type: Sequelize.CHAR(50),
    allowNull: true
  },
  password: {
    type: Sequelize.CHAR(128),
    allowNull: true
  }
}, {
  timestamps: false
})

module.exports = user