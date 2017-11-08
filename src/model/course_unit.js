const knex = require('../db/connection')

const getAllCourseUnits = (courseId) => {
  return knex('units')
    .where('course_id', courseId)
}

const getOneCourseUnit = (courseId, unitId) => {
  return knex('units')
    .where('course_id', courseId)
    .andWhere('id', unitId)
}

module.exports = {
  getAllCourseUnits,
  getOneCourseUnit
}
