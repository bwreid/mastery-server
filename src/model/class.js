const knex = require('../db/connection')

const getAllClasses = () => knex('classes')

const getOneClass = (id) => knex('classes').where('id', id)

module.exports = {
  getAllClasses,
  getOneClass
}