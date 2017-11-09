const knex = require('../db/connection')

const getAllUnitLessons = unitId => knex('lessons')
  .select('*')
  .where('unit_id', unitId)

const getOneUnitLesson = (unitId, lessonId) => knex('lessons')
  .select('*')
  .where('unit_id', unitId)
  .andWhere('id', lessonId)
  .first()

const createUnitLesson = (unitId, body) => knex('lessons')
  .insert({ unit_id: unitId, ...body })
  .returning('*')

const updateUnitLesson = (unitId, lessonId, body) => knex('lessons')
  .where('id', lessonId)
  .andWhere('unit_id', unitId)
  .update(body)
  .returning('*')

const deleteUnitLesson = (unitId, lessonId) => knex('lessons')
  .where('id', lessonId)
  .andWhere('unit_id', unitId)
  .returning('*')
  .del()

module.exports = {
  getAllUnitLessons,
  getOneUnitLesson,
  createUnitLesson,
  updateUnitLesson,
  deleteUnitLesson
}
