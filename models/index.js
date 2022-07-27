const mongoose = require('mongoose')
const setSchema = require('./set')
const cardSchema = require('./card')

const Set = mongoose.model('Set', setSchema)
const Card = mongoose.model('Card', cardSchema)

module.exports = {
  Set,
  Card
}
