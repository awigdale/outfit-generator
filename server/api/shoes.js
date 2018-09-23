const router = require('express').Router()
const {Shoes, ShoesMood} = require('../db/models')
module.exports = router

router.get('/:moodId', async (req, res, next) => {
  const moodShoes = await ShoesMood.findAll({
    where: {moodId: req.params.moodId}
  })
  const shoes = moodShoes.map(shoe => shoe.shoId)
  const allShoes = await Shoes.findAll({where: {id: shoes}})
  res.status(200).json(allShoes)
})
