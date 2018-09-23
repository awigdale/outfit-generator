const Sequelize = require('sequelize')
const db = require('../db')

const Bottom = db.define('bottoms', {
  name: {
    type: Sequelize.STRING
  },
  imgUrl: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

module.exports = Bottom
