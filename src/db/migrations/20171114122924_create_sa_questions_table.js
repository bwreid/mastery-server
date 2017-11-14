
exports.up = knex => {
  return knex.schema.createTable('sa_questions', table => {
    table.increments()
    table.integer('lesson_id').notNullable().defaultsTo(0)
    table.foreign('lesson_id').references('lessons.id')
    table.string('question').notNullable().defaultsTo('')
    table.string('answer').notNullable().defaultsTo('')
    table.timestamps(true, true)
  })  
}

exports.down = knex => knex.schema.dropTable('sa_questions')
