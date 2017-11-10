const knex = require('../db/connection')

const getAllClasses = () => knex('classes')

module.exports = {
  getAllClasses
}