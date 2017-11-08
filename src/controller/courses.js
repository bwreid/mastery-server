const model = require('../model')

const getAllCourses = (req, res, next) => {
  const courses = model.getAllCourses()
  res.status(200).json({ courses })
}

module.exports = {
  getAllCourses
}