const { studentModel: model} = require('../model')

const getAllStudents = (req, res, next) => {
  model.getAllStudents().then(students => {
    res.status(200).json({ students })
  })
}

module.exports = {
  getAllStudents
}