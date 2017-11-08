const knex = require('../db/connection')

const getAllStudents = () => knex('students')

module.exports = {
  getAllStudents
}