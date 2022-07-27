const mongoose = require('mongoose')
const Schema = mongoose.Schema

const cardSchema = new Schema(
  {
    name: { type: String, required: true },
    img: { type: String, required: false },
    type: { type: String, required: false },
    effect: { type: String, required: false },
    rarity: { type: String, required: true },
    set: { type: Schema.Types.String, ref: 'Set' }
  },
  { timestamps: true }
)

module.exports = mongoose.model('cards', cardSchema)
