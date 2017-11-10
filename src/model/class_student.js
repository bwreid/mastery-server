const knex = require('../db/connection')

const getClassStudents = (id) => knex('students')
  .select('*')
  .where('students.class_id', id)

const getOneClassStudent = (id, student_id) => knex('students')
  .select('*')
  .where('students.class_id', id)
  .andWhere('students.id', student_id)

const createClassStudent = (id, body) => knex('students')
  .insert({ class_id: id, ...body })
  .returning('*')

const updateClassStudent = (id, student_id, body) => knex('students')
  .where('students.class_id', id)
  .andWhere('students.id', student_id)
  .update({ ... body })
  .returning('*')

const deleteClassStudent = (id, student_id) => knex('students')
  .where('students.class_id', id)
  .andWhere('students.id', student_id)
  .returning('*')
  .del()

module.exports = { 
  getClassStudents,
  getOneClassStudent,
  createClassStudent,
  updateClassStudent,
  deleteClassStudent
}
