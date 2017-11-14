const express = require('express')
const router = express.Router({ mergeParams: true })
const { lessonQuestionsController: ctrl } = require('../controller')

router.get('/', ctrl.getAllLessonQuestions)

module.exports = router