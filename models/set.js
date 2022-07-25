const { Schema } = require('mongoose')

const setSchema = new Schema(
  {
    name: { type: String, required: true },
    img: { type: String, required: true },
    numberCardsSet: { type: Number, required: true }
  },
  { timestamps: true }
)

module.exports = setSchema
