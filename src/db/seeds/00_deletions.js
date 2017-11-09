exports.seed = knex => {
  knex.delete('lessons')
    .then(() => knex.delete('units'))
    .then(() => knex.delete('students'))
    .then(() => knex.delete('teachers'))
    .then(() => knex.delete('courses'))
}