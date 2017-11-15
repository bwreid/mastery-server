const express = require('express')
const router = express.Router()
const { questionsController: ctrl } = require('../controller')

router.get('/', ctrl.getAllQuestions)
router.get('/:id', ctrl.getOneQuestion)
router.put('/:id', ctrl.updateQuestion)

module.exports = router