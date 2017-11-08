const knex = require('../db/connection')

const getAllUnits = () => knex('units')

const getOneUnit = id => knex('units')
  .select('*')
  .where('id', id)
  .first()

const createUnit = body => knex('units')
  .insert(body)
  .returning('*')

const updateUnit = (id, body) => knex('units')
  .where('id', id)
  .update(body)
  .returning('*')

module.exports = { 
  getAllUnits,
  getOneUnit,
  createUnit,
  updateUnit
}