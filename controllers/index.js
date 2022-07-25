const Card = require('../models/card')

const getCard = async (req, res) => {
  try {
    const cards = await Card.find()
    return res.status(200).json({ cards })
  } catch (e) {
    return res.status(500).send(e.message)
  }
}

const createCard = async (req, res) => {
  try {
    const card = await new Card(req.body)
    await card.save()
    return res.status(201).json({
      card
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const getCardById = async (req, res) => {
  try {
    const { id } = req.params
    const card = await Card.findById(id)
    if (card) {
      return res.status(200).json({ card })
    }
    return res.status(404).send('Card with the specified ID does not exist')
  } catch (e) {
    return res.status(500).send(e.message)
  }
}

module.exports = {
  getCard,
  createCard,
  getCardById
}
