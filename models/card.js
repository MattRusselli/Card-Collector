const { Schema } = require('mongoose')

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

module.exports = cardSchema
