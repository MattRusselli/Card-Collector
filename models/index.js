const mongoose = require('mongoose')
const SetSchema = require('./set')
const CardSchema = require('./card')

const Set = mongoose.model('Set', SetSchema)
const Card = mongoose.model('Card', CardSchema)

module.exports = {
  Set,
  Card
}
