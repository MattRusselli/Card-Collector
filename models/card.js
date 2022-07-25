const { Schema } = require('mongoose')

const Card = new Schema(
  {
    name: { type: String, required: true },
    img: { type: String, required: true },
    type: { type: String, required: true },
    effect: { type: String, required: true },
    rarity: { type: String, required: true },
    set_id: { type: Schema.Types.ObjectId, ref: 'set_id' }
  },
  { timestamps: true }
)

module.exports = Card
