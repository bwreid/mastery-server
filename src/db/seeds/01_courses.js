exports.seed = knex => {
  return knex('courses').del()
    .then(function () {
      return knex('courses').insert([
        {id: 1, title: 'Earth Science', description: 'Forage mustache migas, poke raw denim four dollar toast tumblr health goth tote bag everyday carry kombucha keffiyeh activated charcoal viral. Af stumptown distillery cliche butcher affogato raclette pop-up coloring book selvage meditation lo-fi.'},
        {id: 2, title: 'Anatomy', description: 'Vape cray photo booth XOXO readymade banjo waistcoat forage cliche cardigan roof party kale chips 90\'s.'},
        {id: 3, title: 'Computers', description: 'Master cleanse vexillologist celiac vice retro single-origin coffee. Yuccie adaptogen butcher health goth activated charcoal VHS semiotics.'}
      ])
    }).then(() => {
      return knex.raw(
        `SELECT setval('courses_id_seq', (SELECT MAX(id) FROM courses));`
      )
    })
}
