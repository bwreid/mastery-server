const { unitModel: model } = require('../model')
const fields = ['course_id', 'title', 'summary']

const getAllUnits = (req, res, next) => {
  model.getAllUnits().then(units => {
    res.status(200).json({ units })
  })
}

const getOneUnit = (req, res, next) => {
  model.getOneUnit(req.params.id).then(unit => {
    res.status(200).json({ unit })
  })
}

const createUnit = (req, res, next) => {
  model.createUnit(req.body).then(response => {
    const [unit] = response
    res.status(200).json({ unit })
  })
}

const complete = (req, res, next) => {
  const errors = []
  fields.forEach(field => {
    if(!req.body.hasOwnProperty(field)) errors.push(`${field} is required`)
  })
  if(errors.length) next({ status: 400, message: 'There were errors', errors })
  else next()  
}

const prune = (req, res, next) => {
  Object.keys(req.body).forEach(key => {
    if(!fields.includes(key)) delete req.body[key]
  })
  next()
}

module.exports = {
  getAllUnits,
  getOneUnit,
  createUnit,
  validations: {
    complete, prune,
  }
}
