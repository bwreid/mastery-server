const { classStudentModel: model } = require('../model')

const getClassStudents = (req, res, next) => {
  console.log('get class students')
  model.getClassStudents(req.params.id).then(roster => {
    console.log(roster)
    res.status(200).json({ roster })
  })
}

module.exports = {
  getClassStudents
}
