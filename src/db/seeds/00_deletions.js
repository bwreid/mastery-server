exports.seed = knex => {
  knex('mc_questions').del()
    .then(() => knex('sa_questions').del())
    .then(() => knex('lessons').del())
    .then(() => knex('students').del())
    .then(() => knex('classes').del())
    .then(() => knex('teachers').del())
    .then(() => knex('units').del())  
    .then(() => knex('courses').del())
}
