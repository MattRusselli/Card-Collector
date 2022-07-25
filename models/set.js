const { Schema } = require('mongoose')

const Set = new Schema(
  {
    name: { type: String, required: true },
    img: { type: String, required: true },
    numberCardsSet: { type: Number, required: true }
  },
  { timestamps: true }
)

module.exports = Set
