// note the timestamp in the filename... used by knex to know what order 
// migrations should be run in.

// the .up() function returns a promise (don't forget the "return")...
// use knex.schema.* methods (documented under Schema Builder on knexjs.org)
// to create schema changes.
exports.up = function(knex) {
  return knex.schema.createTable('fruits', (tbl) => {
      tbl.increments('id');
      tbl.text('name', 128).unique().notNullable();
      tbl.decimal('avgWeightOz').notNullable();
      tbl.boolean('delicious');
  })
};

// the .down() method is used with knex migrate:rollback ... 
// your code here should put the database back into the same state/shape it was
// in before the .up() method was called. In this case, since .up() adds a table,
// .down() just needs to "drop" (remove/delete) the table. All schema *and* data
// are removed with you drop a table.
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('fruits');
};
