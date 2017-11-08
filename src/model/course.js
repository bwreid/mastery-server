const knex = require('../db/connection')

const getAllCourses = () => knex('courses')

module.exports = {
  getAllCourses
}