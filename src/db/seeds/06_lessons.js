
exports.seed = knex => {
  return knex('lessons').insert([
    { id: 1, title: 'Hardness of Minerals', content: 'Wayfarers green juice intelligentsia taxidermy, single-origin coffee copper mug freegan aesthetic four dollar toast celiac drinking vinegar direct trade tofu occupy adaptogen. Celiac authentic prism yr.', unit_id: 1},
    { id: 2, title: 'Crystal Structures', content: 'Wayfarers green juice intelligentsia taxidermy, single-origin coffee copper mug freegan aesthetic four dollar toast celiac drinking vinegar direct trade tofu occupy adaptogen. Celiac authentic prism yr.', unit_id: 1},
    { id: 3, title: 'What is inside the Earth?', content: 'Wayfarers green juice intelligentsia taxidermy, single-origin coffee copper mug freegan aesthetic four dollar toast celiac drinking vinegar direct trade tofu occupy adaptogen. Celiac authentic prism yr.', unit_id: 1}
  ])
  .then(() => {
    return knex.raw(`SELECT setval('lessons_id_seq', (SELECT MAX(id) FROM lessons));`)
  })
}
