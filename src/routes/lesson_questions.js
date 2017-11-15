const express = require('express')
const router = express.Router({ mergeParams: true })
const { lessonQuestionsController: ctrl } = require('../controller')

router.get('/', ctrl.getAllLessonQuestions)
router.get('/:questionId', ctrl.getQuestion)
router.post('/', ctrl.validations.mcComplete, ctrl.validations.mcPrune, ctrl.createQuestion)
router.put('/:questionId', ctrl.validations.mcComplete, ctrl.validations.mcPrune, ctrl.updateQuestion)

module.exports = router
