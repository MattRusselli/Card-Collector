const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()

router.get('/', (req, res) => res.send('Yu-Gi-Ooooooooooooooh!'))

router.get('/card', controllers.getCard)

router.post('/card', controllers.createCard)

router.get('/card/:id', controllers.getCardById)

module.exports = router
