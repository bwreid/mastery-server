const knex = require('../db/connection')

const getAllUnits = () => knex('units')

const getOneUnit = id => knex('units')
  .select('*')
  .where('id', id)
  .first()

module.exports = { 
  getAllUnits,
  getOneUnit
}