const { teacherModel: model } = require('../model')

const getAllTeachers = (req, res, next) => {
  model.getAllTeachers().then(teachers => {
    res.status(200).json({ teachers })
  }) 
}

module.exports = {
  getAllTeachers
}