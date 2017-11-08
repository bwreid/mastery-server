const knex = require('../db/connection')

const getAllCourses = () => knex('courses')

const getOneCourse = id => knex('courses')
  .select('*')
  .where('id', id)


module.exports = {
  getAllCourses,
  getOneCourse,
}
