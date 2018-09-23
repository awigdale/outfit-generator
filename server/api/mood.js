const router = require('express').Router()
const {Mood} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  const moods = await Mood.findAll()
  res.status(200).json(moods)
})
