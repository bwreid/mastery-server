const express = require('express')
const router = express.Router()
const { questionsController: ctrl } = require('../controller')

router.get('/', ctrl.getAllQuestions)
router.get('/:id', ctrl.getOneQuestion)

module.exports = router