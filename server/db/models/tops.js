const Sequelize = require('sequelize')
const db = require('../db')

const Tops = db.define('tops', {
  name: {
    type: Sequelize.STRING
  },
  imgUrl: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

module.exports = Tops
