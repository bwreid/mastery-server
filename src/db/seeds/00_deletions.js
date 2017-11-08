exports.seed = knex => {
  knex.delete('units')
    .then(() => knex.delete('teachers'))
    .then(() => knex.delete('courses'))
}