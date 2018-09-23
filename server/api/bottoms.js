const router = require('express').Router()
const {Bottom, BottomsMood} = require('../db/models')
module.exports = router

router.get('/:moodId', async (req, res, next) => {
  const moodPants = await BottomsMood.findAll({
    where: {moodId: req.params.moodId}
  })
  const pants = moodPants.map(pant => pant.bottomId)
  const allPants = await Bottom.findAll({where: {id: pants}})
  res.status(200).json(allPants)
})
