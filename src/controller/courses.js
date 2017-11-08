const { courseModel: model } = require('../model')

const getAllCourses = (req, res, next) => {
  model.getAllCourses().then(courses => {
    res.status(200).json({ courses })
  })
}

module.exports = {
  getAllCourses
}
