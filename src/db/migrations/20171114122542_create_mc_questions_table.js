
exports.up = knex => {
  return knex.schema.createTable('mc_questions', table => {
    table.increments()
    table.integer('lesson_id').notNullable().defaultsTo(0)
    table.foreign('lesson_id').references('lessons.id')
    table.string('question').notNullable().defaultsTo('')
    table.string('answer_a').notNullable().defaultsTo('')
    table.string('answer_b').notNullable().defaultsTo('')
    table.string('answer_c').notNullable().defaultsTo('')
    table.string('answer_d').notNullable().defaultsTo('')
    table.string('answer').notNullable().defaultsTo('A')
    table.timestamps(true, true)
  })  
}

exports.down = knex => knex.schema.dropTable('mc_questions')
