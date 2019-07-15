exports.up = function(knex) {
  return knex.schema.createTable("kid_users", kids => {
    kids.increments();

    kids
      .string("username", 255)
      .notNullable()
      .unique();
    kids.string("password", 255).notNullable();

    kids.string("first_name", 255).notNullable();
    kids.string("last_name", 255).notNullable();

    kids.string("city", 255).notNullable();
    kids.string("state", 255).notNullable();
    kids.string("zip_code", 255).notNullable();
    kids.string("country", 255).notNullable();

    kids.integer("age", 3).notNullable();
    kids.string("grade", 255).notNullable();
    kids.string("school_type", 255).notNullable();
    kids.string("clubs", 255);
    kids.string("hobbies", 255);
    kids.string("classes", 255);
    kids.string("teachers", 255);

    kids
      .boolean("parental_approval", 255)
      .notNullable()
      .defaultTo(false);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("kid_users");
};
