const Card = require('../models/card')
const Set = require('../models/set')

//card controllers
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

const deleteCard = async (req, res) => {
  try {
    const { id } = req.params
    const cardDelete = await Card.findByIdAndDelete(id)
    if (cardDelete) {
      return res.status(200).json({ cardDelete })
    }
    throw new Error('Card not found')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const updateCard = async (req, res) => {
  try {
    const cardUpdate = await Card.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })
    res.status(200).json({ cardUpdate })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

//set controlellers
const getSet = async (req, res) => {
  try {
    const sets = await Set.find()
    return res.status(200).json({ sets })
  } catch (e) {
    return res.status(500).send(e.message)
  }
}

const getSetById = async (req, res) => {
  try {
    const { id } = req.params
    const set = await Set.findById(id)
    if (set) {
      return res.status(200).json({ set })
    }
    return res.status(404).send('Card with the specified ID does not exist')
  } catch (e) {
    return res.status(500).send(e.message)
  }
}

module.exports = {
  getCard,
  createCard,
  getCardById,
  deleteCard,
  updateCard,
  getSet,
  getSetById
}
