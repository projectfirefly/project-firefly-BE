exports.up = function(knex) {
  return knex.schema.createTable("kids", kids => {
    kids.increments();

    kids
      .string("email", 255)
      .notNullable()
      .unique();
    kids
      .string("username", 255)
      .notNullable()
      .unique();

    kids.string("first_name", 255);
    kids.string("last_name", 255);

    kids.string("city", 255);
    kids.string("state", 255);
    kids.string("zip_code", 255);
    kids.string("country", 255);

    kids.integer("age", 3);
    kids.string("grade", 255);
    kids.string("school_type", 255);
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
  return knex.schema.dropTableIfExists("kids");
};
