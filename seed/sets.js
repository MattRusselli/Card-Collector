const db = require('../db')
const { Set } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const sets = [
    {
      name: 'OTS Tournament Pack 18 (OP18)',
      img: 'https://i.imgur.com/tSLtQYP.png',
      numberCardsSet: 25
    },
    {
      name: 'Legendary Duelists: Season 3 (LDS3)',
      img: 'https://i.imgur.com/DaxtC5j.png',
      numberCardsSet: 150
    }
  ]
  await Set.insertMany(sets)
}
const run = async () => {
  await main()
  db.close()
}
run()
