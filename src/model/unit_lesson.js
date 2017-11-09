const knex = require('../db/connection')

const getAllUnitLessons = unitId => knex('lessons')
  .select('*')
  .where('unit_id', unitId)

const getOneUnitLesson = (unitId, lessonId) => knex('lessons')
  .select('*')
  .where('unit_id', unitId)
  .andWhere('id', lessonId)
  .first()

module.exports = {
  getAllUnitLessons,
  getOneUnitLesson
}
