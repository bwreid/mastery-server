
exports.seed = knex => {
  return knex('units').del()
    .then(function () {
      return knex('units').insert([
        {id: 1, course_id: 1, title: 'Rocks and Minerals', summary: 'Freegan farm-to-table gastropub tousled, typewriter vegan hammock ennui ethical blue bottle. Occupy kickstarter wolf health goth snackwave pour-over.'},
        {id: 2, course_id: 1, title: 'Anatomy of the Earth', summary: 'Freegan farm-to-table gastropub tousled, typewriter vegan hammock ennui ethical blue bottle. Occupy kickstarter wolf health goth snackwave pour-over.'},
        {id: 3, course_id: 2, title: 'The Skeleton', summary: 'Freegan farm-to-table gastropub tousled, typewriter vegan hammock ennui ethical blue bottle. Occupy kickstarter wolf health goth snackwave pour-over.'}
      ])
    }).then(() => {
      return knex.raw(`SELECT setval('units_id_seq', (SELECT MAX(id) FROM units));`)
    })
}
