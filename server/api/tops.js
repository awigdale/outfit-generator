const router = require('express').Router()
const {Tops, TopsMood} = require('../db/models')
module.exports = router

router.get('/:moodId', async (req, res, next) => {
  const moodTops = await TopsMood.findAll({
    where: {moodId: req.params.moodId}
  })
  const tops = moodTops.map(top => top.topId)
  const allTops = await Tops.findAll({where: {id: tops}})
  res.status(200).json(allTops)
})
