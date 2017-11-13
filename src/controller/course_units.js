const { 
  courseUnitModel: model,
  unitLessonModel: dependencyModel
} = require('../model')
const fields = ['title', 'summary']

const getAllCourseUnits = (req, res, next) => {
  model.getAllCourseUnits(req.params.id).then(units => {
    res.status(200).json({ units })
  })
}

const getOneCourseUnit = (req, res, next) => {
  model.getOneCourseUnit(req.params.id, req.params.unit_id).then(unit => {
    res.status(200).json({ unit })
  })
}

const createCourseUnit = (req, res, next) => {
  model.createCourseUnit(req.params.id, req.body).then(result => {
    const [unit] = result
    res.status(200).json({ unit })
  })
}

const updateCourseUnit = (req, res, next) => {
  model.updateCourseUnit(req.params.id, req.params.unit_id, req.body).then(result => {
    const [unit] = result
    res.status(200).json({ unit })
  })
}

const deleteOneCourseUnit = (req, res, next) => {
  model.deleteCourseUnit(req.params.id, req.params.unit_id).then(result => {
    const [unit] = result
    res.status(200).json({ unit })
  })
}

const exists = (req, res, next) => {
  model.getOneCourseUnit(req.params.id, req.params.unit_id).then(result => {
    if(result.length > 0) {
      next()
    } else {
      next({ status: 404, message: 'Not found' })
    }
  })
}

const complete = (req, res, next) => {
  const errors = []
  fields.forEach(field => {
    if(!req.body.hasOwnProperty(field)) {
      errors.push(`${field} is required`)
    }
  })

  if(errors.length) next({ status: 400, message: 'There were errors', errors })
  else next()
}

const prune = (req, res, next) => {
  Object.keys(req.body).forEach(field => {
    if(!fields.includes(field)) delete req.body.field
  })
  next()
}

const dependents = (req, res, next) => {
  dependencyModel.getAllUnitLessons(req.params.unit_id).then(lessons => {
    if(lessons.length > 0) return next ({ status: 400, message: 'Cannot delete unit with dependent lessons' })
    else return next()
  })
}

module.exports = {
  getAllCourseUnits,
  getOneCourseUnit,
  createCourseUnit,
  updateCourseUnit,
  deleteOneCourseUnit,
  validations: {
    exists, complete, prune, dependents
  }
}