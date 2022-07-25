const mongoose = require('mongoose')
const Schema = mongoose.Schema

const setSchema = new Schema(
  {
    name: { type: String, required: true },
    img: { type: String, required: true },
    numberCardsSet: { type: Number, required: true }
  },
  { timestamps: true }
)

module.exports = mongoose.model('sets', setSchema)
