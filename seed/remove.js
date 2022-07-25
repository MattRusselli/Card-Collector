const db = require('../db')
const { Card, Set } = require('../models')

// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  await Card.deleteMany({})
  await Set.deleteMany({})
  console.log('Deleted Collections')
}
const run = async () => {
  await main()
  db.close()
}

run()
