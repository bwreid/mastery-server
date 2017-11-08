const { courseModel: model } = require('../model')

const getAllCourses = (req, res, next) => {
  model.getAllCourses().then(courses => {
    res.status(200).json({ courses })
  })
}

const getOneCourse = (req, res, next) => {
  model.getOneCourse(req.params.id).then(course => {
    res.status(200).json({ course })
  })
}

module.exports = {
  getAllCourses,
  getOneCourse
}
