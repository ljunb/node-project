const Sequelize = require('sequelize')

const NodeProject = new Sequelize('mysql://root:123456@localhost/cj_node_project', {
  define: {
    timestamps: false
  }
})

module.exports = {
  NodeProject
}