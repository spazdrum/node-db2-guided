// npx knex migrate:create 'name' -- creates migration
// npx knex migrate:latest -- pushes migration
// npx knex migrate:rollback -- rolls back latest migration

exports.up = function (knex) {
  return knex.schema.createTable("fruits", (tbl) => {
    tbl.increments("id");
    tbl.string("name", 128).unique().notNullable();
    tbl.decimal("avgWeightOz").notNullable();
    tbl.boolean("delicious");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("fruits");
};
