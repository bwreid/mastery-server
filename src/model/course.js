const knex = require('../db/connection')

const getAllCourses = () => knex('courses')

const getOneCourse = id => knex('courses')
  .select('*')
  .where('id', id)

const createCourse = body => knex('courses')
  .insert(body)
  .returning('*')

module.exports = {
  getAllCourses,
  getOneCourse,
  createCourse,
}
