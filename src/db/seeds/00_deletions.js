exports.seed = knex => {
  knex('lessons').del()    
    .then(() => knex('students').del())
    .then(() => knex('classes').del())
    .then(() => knex('teachers').del())
    .then(() => knex('units').del())  
    .then(() => knex('courses').del())
}
