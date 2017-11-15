const express = require('express')
const router = express.Router({ mergeParams: true })
const { lessonQuestionsController: ctrl } = require('../controller')

router.get('/', ctrl.getAllLessonQuestions)
router.get('/sa', ctrl.getAllSAQuestions)
router.get('/mc', ctrl.getAllMCQuestions)
router.get('/mc/:questionId', ctrl.getMCQuestion)
router.get('/sa/:questionId', ctrl.getSAQuestion)
router.post('/mc', ctrl.validations.mcComplete, ctrl.validations.mcPrune, ctrl.createMCQuestion)
router.post('/sa', ctrl.validations.saComplete, ctrl.validations.saPrune, ctrl.createSAQuestion)

module.exports = router