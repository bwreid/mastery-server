const { classStudentModel: model } = require('../model')

const getClassStudents = (req, res, next) => {
  model.getClassStudents(req.params.id).then(roster => {
    res.status(200).json({ roster })
  })
}

module.exports = {
  getClassStudents
}
