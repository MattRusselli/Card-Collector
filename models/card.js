const mongoose = require('mongoose')
const Schema = mongoose.Schema

const cardSchema = new Schema(
  {
    name: { type: String, required: true },
    img: { type: String, required: true },
    type: { type: String, required: true },
    effect: { type: String, required: true },
    rarity: { type: String, required: true },
    set: { type: Schema.Types.ObjectId, ref: 'Set' }
  },
  { timestamps: true }
)

module.exports = mongoose.model('cards', cardSchema)
