
exports.up = knex => {
  return knex.schema.table('units', table => {
    table.dropColumn('summary')
    table.text('summary_text')
  })
}

exports.down = knex => {
  return knex.schema.table('units', table => {
    table.dropColumn('summary_text')
    table.string('summary').notNullable().defaultsTo('')
  })  
}
