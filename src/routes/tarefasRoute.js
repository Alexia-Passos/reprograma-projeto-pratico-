const express = require ("express")
const router = express.Router()
const controller = require('../controllers/tarefasController')

router.get('/', controller.get)
router.get('/concluido',controller.getConcluidos)
router.get('/:id', controller.getById)

module.exports = router 
