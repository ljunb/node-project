const Sequelize = require('sequelize')

const config = {
  host: 'localhost',
  database: 'test',
  username: 'root',
  password: '123456',
}

const sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    idle: 30000
  }
})

module.exports = sequelize