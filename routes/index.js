const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()

router.get('/', (req, res) => res.send('Yu-Gi-Ooooooooooooooh!'))

//routes for card
router.get('/card', controllers.getCard)

router.post('/card', controllers.createCard)

router.get('/card/:id', controllers.getCardById)

router.delete('/card-delete/:id', controllers.deleteCard)

router.put('/card-update/:id', controllers.updateCard)

//route for set
router.get('/set', controllers.getSet)

router.get('/set/:id', controllers.getSetById)

module.exports = router
