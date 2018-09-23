const Sequelize = require('sequelize')
const db = require('../db')

const Shoes = db.define('shoes', {
  name: {
    type: Sequelize.STRING
  },
  imgUrl: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

module.exports = Shoes
