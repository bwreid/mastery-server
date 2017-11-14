const { lessonQuestionModel: model } = require('../model')

const getAllLessonQuestions = (req, res, next) => {
  model.getAllLessonQuestions(req.params.id).then(questions => {
    res.status(200).json({ questions })
  })
}

module.exports = {
  getAllLessonQuestions
}