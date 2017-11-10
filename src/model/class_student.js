const knex = require('../db/connection')

const getClassStudents = (id) => knex('students')
  .select('*')
  .where('students.class_id', id)


module.exports = { 
  getClassStudents
}
