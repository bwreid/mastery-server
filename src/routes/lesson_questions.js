const express = require('express')
const router = express.Router({ mergeParams: true })
const { lessonQuestionsController: ctrl } = require('../controller')

router.get('/', ctrl.getAllLessonQuestions)
router.get('/mc/:questionId', ctrl.getMCQuestion)
router.get('/sa/:questionId', ctrl.getSAQuestion)

module.exports = router