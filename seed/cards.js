const db = require('../db')
const { Set, Card } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const op18 = await Set.find({
    name: 'OTS Tournament Pack 18 (OP18)OTS Tournament Pack 18 (OP18)'
  })
  const ldS3 = await Set.find({ name: 'Legendary Duelists: Season 3 (LDS3)' })

  const cards = [
    {
      name: 'Dogmatika Ecclesia, the Virtuous',
      img: 'https://i.imgur.com/ECE0iEv.jpg',
      type: 'Effect Monster',
      effect:
        'Cannot be destroyed by battle with a monster Special Summoned from the Extra Deck. You can only use each of the following effects of "Dogmatika Ecclesia, the Virtuous" once per turn. If a monster Special Summoned from the Extra Deck is on the field: You can Special Summon this card from your hand. If this card is Normal or Special Summoned: You can activate this effect; add 1 "Dogmatika" card from your Deck to your hand, except "Dogmatika Ecclesia, the Virtuous", also you cannot Special Summon monsters from the Extra Deck for the rest of this turn.',
      rarity: 'Ultimate Rare',
      set_id: op18[0]._id
    },
    {
      name: 'Divine Arsenal AA-ZEUS - Sky Thunder',
      img: 'https://i.imgur.com/gWc8KEt.jpg',
      type: 'XYZ Monster',
      effect: `2 Level 12 monsters
      Once per turn, if an Xyz Monster battled this turn, you can also Xyz Summon "Divine Arsenal AA-ZEUS - Sky Thunder" by using 1 Xyz Monster you control as material. (Transfer its materials to this card.) (Quick Effect): You can detach 2 materials from this card; send all other cards from the field to the GY. Once per turn, if another card(s) you control is destroyed by battle or an opponent's card effect: You can attach 1 card from your hand, Deck, or Extra Deck to this card as material.`,
      rarity: 'Ultimate Rare',
      set_id: op18[0]._id
    },
    {
      name: 'Fusion Destiny',
      img: 'https://i.imgur.com/bgfeX2r.jpg',
      type: 'Spell Card',
      effect: `Fusion Summon 1 Fusion Monster from your Extra Deck that lists a "Destiny HERO" monster as material, using monsters from your hand or Deck as Fusion Material, but destroy it during the End Phase of the next turn, also for the rest of this turn after this card resolves, you cannot Special Summon monsters, except DARK "HERO" monsters. You can only activate 1 "Fusion Destiny" per turn.`,
      rarity: 'Ultimate Rare',
      set_id: op18[0]._id
    },
    {
      name: '',
      img: '',
      type: '',
      effect: '',
      rarity: '',
      set_id: op18[0]._id
    },
    {
      name: '',
      img: '',
      type: '',
      effect: '',
      rarity: '',
      set_id: op18[0]._id
    },
    {
      name: '',
      img: '',
      type: '',
      effect: '',
      rarity: '',
      set_id: op18[0]._id
    },
    {
      name: '',
      img: '',
      type: '',
      effect: '',
      rarity: '',
      set_id: op18[0]._id
    },
    {
      name: '',
      img: '',
      type: '',
      effect: '',
      rarity: '',
      set_id: op18[0]._id
    },
    {
      name: '',
      img: '',
      type: '',
      effect: '',
      rarity: '',
      set_id: op18[0]._id
    },
    {
      name: '',
      img: '',
      type: '',
      effect: '',
      rarity: '',
      set_id: op18[0]._id
    },
    {
      name: '',
      img: '',
      type: '',
      effect: '',
      rarity: '',
      set_id: op18[0]._id
    },
    {
      name: '',
      img: '',
      type: '',
      effect: '',
      rarity: '',
      set_id: op18[0]._id
    },
    {
      name: '',
      img: '',
      type: '',
      effect: '',
      rarity: '',
      set_id: op18[0]._id
    },
    {
      name: '',
      img: '',
      type: '',
      effect: '',
      rarity: '',
      set_id: op18[0]._id
    },
    {
      name: '',
      img: '',
      type: '',
      effect: '',
      rarity: '',
      set_id: op18[0]._id
    },
    {
      name: '',
      img: '',
      type: '',
      effect: '',
      rarity: '',
      set_id: op18[0]._id
    },
    {
      name: '',
      img: '',
      type: '',
      effect: '',
      rarity: '',
      set_id: op18[0]._id
    },
    {
      name: '',
      img: '',
      type: '',
      effect: '',
      rarity: '',
      set_id: op18[0]._id
    },
    {
      name: '',
      img: '',
      type: '',
      effect: '',
      rarity: '',
      set_id: op18[0]._id
    },
    {
      name: '',
      img: '',
      type: '',
      effect: '',
      rarity: '',
      set_id: op18[0]._id
    },
    {
      name: '',
      img: '',
      type: '',
      effect: '',
      rarity: '',
      set_id: op18[0]._id
    }
  ]
}
