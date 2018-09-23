'use strict'
const Sequelize = require('sequelize')
const db = require('../server/db')
const {
  User,
  Bottom,
  Tops,
  Shoes,
  Mood,
  BottomsMood,
  TopsMood,
  ShoesMood
} = require('../server/db/models')

const Op = Sequelize.Op

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const users = await Promise.all([
    User.create({email: 'maggie@email.com', password: '123'}),
    User.create({email: 'abby@email.com', password: '123'})
  ])

  const bottoms = [
    {name: 'blackSkinny', imgUrl: 'img/blackskinny.jpg'},
    {
      name: 'blackSkirt',
      imgUrl: 'img/skirt.png'
    },
    {name: 'fancySkirt', imgUrl: 'img/fancyskirt.jpg'},
    {name: 'stripedPants', imgUrl: 'img/stripedpants.jpg'}
  ]

  const seedBottoms = bottoms.map(async bottom => {
    await Bottom.create(bottom)
  })

  const tops = [
    {name: 'blackTank', imgUrl: 'img/blacktanks.jpg', userId: 1},
    {
      name: 'acdc',
      imgUrl: 'img/acdc.jpg',
      userId: 2
    },
    {name: 'RHCP', imgUrl: 'img/RHCP.jpg', userId: 2},
    {name: 'jeanShirt', imgUrl: 'img/jeanshirt.jpg', userId: 2},
    {name: 'buttonDown', imgUrl: 'img/black button down.jpg', userId: 2}
  ]

  const seedTops = tops.map(async top => {
    await Tops.create(top)
  })

  const shoes = [
    {name: 'docs', imgUrl: 'img/docs.jpg', userId: 1},
    {
      name: 'birks',
      imgUrl: 'img/birks.jpg',
      userId: 2
    },
    {name: 'blackHealBoots', imgUrl: 'img/blackhealboots.jpg', userId: 2},
    {name: 'redBoots', imgUrl: 'img/redboots.jpg', userId: 2}
  ]

  const seedShoes = shoes.map(async shoe => {
    await Shoes.create(shoe)
  })

  const moods = [
    {mood: 'relaxed'},
    {mood: 'sophisticated'},
    {mood: 'sexy'},
    {mood: 'average'},
    {mood: 'bold'},
    {mood: 'fancy'}
  ]

  const seedMoods = moods.map(async mood => {
    await Mood.create(mood)
  })

  // async function seedMoodBottoms() {
  //   try {
  //     const bottom = await Bottom.findAll({where: {name: 'blackSkinny'}})
  //     const foundMoods = await Mood.findAll({
  //       where: {
  //         [Op.or]: [
  //           {mood: 'relaxed'},
  //           {mood: 'sophisticated'},
  //           {mood: 'average'}
  //         ]
  //       }
  //     })
  //     console.log('this is found moods', foundMoods)
  //   } catch (err) {
  //     console.error(err)
  //   }
  // }

  const associations = await Promise.all([
    BottomsMood.create({bottomId: 1, moodId: 1}),
    BottomsMood.create({bottomId: 1, moodId: 3}),
    BottomsMood.create({bottomId: 1, moodId: 4}),
    BottomsMood.create({bottomId: 2, moodId: 2}),
    BottomsMood.create({bottomId: 3, moodId: 2}),
    BottomsMood.create({bottomId: 2, moodId: 4}),
    BottomsMood.create({bottomId: 2, moodId: 3}),
    BottomsMood.create({bottomId: 2, moodId: 6}),
    BottomsMood.create({bottomId: 3, moodId: 5}),
    BottomsMood.create({bottomId: 3, moodId: 6}),
    BottomsMood.create({bottomId: 4, moodId: 5}),
    ShoesMood.create({shoId: 1, moodId: 1}),
    ShoesMood.create({shoId: 1, moodId: 4}),
    ShoesMood.create({shoId: 1, moodId: 5}),
    ShoesMood.create({shoId: 2, moodId: 1}),
    ShoesMood.create({shoId: 2, moodId: 4}),
    ShoesMood.create({shoId: 3, moodId: 2}),
    ShoesMood.create({shoId: 3, moodId: 3}),
    ShoesMood.create({shoId: 3, moodId: 5}),
    ShoesMood.create({shoId: 3, moodId: 6}),
    ShoesMood.create({shoId: 4, moodId: 2}),
    ShoesMood.create({shoId: 4, moodId: 3}),
    ShoesMood.create({shoId: 4, moodId: 5}),
    ShoesMood.create({shoId: 4, moodId: 6}),
    TopsMood.create({topId: 1, moodId: 1}),
    TopsMood.create({topId: 1, moodId: 3}),
    TopsMood.create({topId: 1, moodId: 4}),
    TopsMood.create({topId: 1, moodId: 5}),
    TopsMood.create({topId: 2, moodId: 1}),
    TopsMood.create({topId: 2, moodId: 4}),
    TopsMood.create({topId: 2, moodId: 5}),
    TopsMood.create({topId: 3, moodId: 1}),
    TopsMood.create({topId: 3, moodId: 4}),
    TopsMood.create({topId: 3, moodId: 5}),
    TopsMood.create({topId: 4, moodId: 1}),
    TopsMood.create({topId: 4, moodId: 4}),
    TopsMood.create({topId: 4, moodId: 5}),
    TopsMood.create({topId: 5, moodId: 2}),
    TopsMood.create({topId: 5, moodId: 4}),
    TopsMood.create({topId: 5, moodId: 6})
  ])

  console.log(`seeded ${users.length} users`)
  console.log(`seeded ${bottoms.length} bottoms`)
  console.log(`seeded ${tops.length} tops`)
  console.log(`seed ${shoes.length} shoes`)
  console.log(`seeded ${moods.length} moods`)
  // console.log(`seeded ${associations.length} associations`)
  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
