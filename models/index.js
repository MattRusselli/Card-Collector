const mongoose = require('mongoose')
const setSchema = require('./set')
const cardSchema = require('./card')

const Set = mongoose.model('Set', setSchema)
const Cards = mongoose.model('Cards', cardSchema)

module.exports = {
  Set,
  Cards
}
