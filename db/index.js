const mongoose = require('mongoose')

mongoose
  .connect('mongodb://127.0.0.1:27017/cardsDatabase')
  .then(() => {
    console.log('Connected to MonogoDB')
  })
  .catch((event) => {
    console.error('connection Error', event.message)
  })
mongoose.set('debug', true)
const db = mongoose.connection

module.exports = db
