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

const updateCourseUnit = (courseId, unitId, body) => {
  return knex('units')
    .where('course_id', courseId)
    .andWhere('id', unitId)
    .update({ course_id: courseId, ...body })
    .returning('*')
}

const deleteCourseUnit = (courseId, unitId) => {
  return knex('units')
    .where('course_id', courseId)
    .andWhere('id', unitId)
    .returning('*')
    .del()
}

module.exports = {
  getAllCourseUnits,
  getOneCourseUnit,
  createCourseUnit,
  updateCourseUnit,
  deleteCourseUnit
}
