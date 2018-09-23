const router = require('express').Router()
module.exports = router

router.use('/users', require('./users'))
router.use('/bottoms', require('./bottoms'))
router.use('/tops', require('./tops'))
router.use('/shoes', require('./shoes'))
router.use('/mood', require('./mood'))

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
