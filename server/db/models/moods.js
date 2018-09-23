const Sequelize = require('sequelize')
const db = require('../db')

const Mood = db.define('moods', {
  mood: {
    type: Sequelize.STRING
  }
})

module.exports = Mood
