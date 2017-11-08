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

const createCourseUnit = (courseId, body) => {
  return knex('units')
    .insert({ course_id: courseId, ...body })
    .returning('*')
}

module.exports = {
  getAllCourseUnits,
  getOneCourseUnit,
  createCourseUnit
}
