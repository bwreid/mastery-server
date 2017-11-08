const { courseUnitModel: model } = require('../model')

const getAllCourseUnits = (req, res, next) => {
  model.getAllCourseUnits(req.params.id).then(units => {
    res.status(200).json({ units })
  })
}

const getOneCourseUnit = (req, res, next) => {
  model.getOneCourseUnit(req.params.id, req.params.unit_id).then(result => {
    res.status(200).json(result)
  })
}

module.exports = {
  getAllCourseUnits,
  getOneCourseUnit
}