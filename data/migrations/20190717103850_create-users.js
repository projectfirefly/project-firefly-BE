exports.up = function(knex) {
  return knex.schema.createTable("users", users => {
    users.increments();

    users
      .string("username", 255)
      .notNullable()
      .unique();

    users.string("first_name", 255);
    users.string("last_name", 255);

    users.string("address", 255);
    users.string("city", 255);
    users.string("state", 255);
    users.string("zip_code", 255);
    users.string("country", 255);

    users.string("marital_status", 255);
    users.string("job", 255);
    users.string("education", 255);
    users.integer("age", 3);
    users.string("kid_relation", 255);

    users
      .boolean("academic_research", 255)
      .notNullable()
      .defaultTo(false);

    users
      .integer("kid_id")
      .unsigned()
      .references("id")
      .inTable("kids")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("users");
};
