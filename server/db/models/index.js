const User = require('./user')
const Bottom = require('./bottoms')
const Tops = require('./tops')
const Shoes = require('./shoes')
const Mood = require('./moods')
const BottomsMood = require('./BottomsMood')
const ShoesMood = require('./ShoesMood')
const TopsMood = require('./TopsMood')
/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(User)
 */

//Users associated to their clothing
Bottom.belongsTo(User)
Tops.belongsTo(User)
Shoes.belongsTo(User)

//Clothing associated to moods
Mood.belongsToMany(Bottom, {
  through: BottomsMood
})
// Bottom.hasMany(Mood)
Bottom.belongsToMany(Mood, {
  through: BottomsMood
})

Mood.belongsToMany(Tops, {
  through: TopsMood
})
Tops.belongsToMany(Mood, {
  through: TopsMood
})

Mood.belongsToMany(Shoes, {
  through: ShoesMood
})
Shoes.belongsToMany(Mood, {
  through: ShoesMood
})

/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */
module.exports = {
  User,
  Bottom,
  Tops,
  Shoes,
  Mood,
  BottomsMood,
  TopsMood,
  ShoesMood
}
