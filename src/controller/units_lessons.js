const { unitLessonModel: model } = require('../model')

const getAllUnitLessons = (req, res, next) => {
  model.getAllUnitLessons(req.params.id).then(lessons => {
    res.status(200).json({ lessons })
  })
}

const getOneUnitLesson = (req, res, next) => {
  model.getOneUnitLesson(req.params.id, req.params.lesson_id).then(lesson => {
    res.status(200).json({ lesson })
  })
}

module.exports = {
  getAllUnitLessons,
  getOneUnitLesson,
}