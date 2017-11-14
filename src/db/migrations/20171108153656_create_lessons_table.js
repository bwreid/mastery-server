
exports.up = knex => {
  return knex.schema.createTable('lessons', table => {
    table.increments()
    table.string('title').notNullable().defaultsTo('')
    table.text('content').notNullable().defaultsTo('')
    table.integer('unit_id').notNullable()
    table.foreign('unit_id').references('units.id')
    table.timestamps(true, true)
  })  
}

exports.down = knex => knex.schema.dropTable('lessons')
