const { unitModel: model } = require('../model')

const getAllUnits = (req, res, next) => {
  model.getAllUnits().then(units => {
    res.status(200).json({ units })
  })
}

const getOneUnit = (req, res, next) => {
  console.log('get one')
  model.getOneUnit(req.params.id).then(unit => {
    console.log('got one')
    res.status(200).json({ unit })
  })
}

module.exports = {
  getAllUnits,
  getOneUnit,
}
