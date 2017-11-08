const knex = require('../db/connection')

const getAllCourses = () => knex('courses')

const getOneCourse = id => knex('courses')
  .select('*')
  .where('id', id)

const createCourse = body => knex('courses')
  .insert(body)
  .returning('*')

const updateCourse = (id, body) => knex('courses')
  .where('id', id)
  .update(body)
  .returning('*')

const deleteCourse = id => knex('courses')
  .where('id', id)
  .returning('*')
  .del()

module.exports = {
  getAllCourses,
  getOneCourse,
  createCourse,
  updateCourse,
  deleteCourse,
}
