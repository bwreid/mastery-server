const { teacherModel: model } = require('../model')

const getAllTeachers = (req, res, next) => {
  model.getAllTeachers().then(teachers => {
    res.status(200).json({ teachers })
  }) 
}

const getOneTeacher = (req, res, next) => {
  model.getOneTeacher(req.params.id).then(teacher => {
    res.status(200).json({ teacher })
  })
}

module.exports = {
  getAllTeachers,
  getOneTeacher
}