exports.up = function(knex) {
  return knex.schema.createTable("kids", kids => {
    kids.increments();

    kids.string("first_name", 255);
    kids.string("last_name", 255);

    kids.string("avatar", 255);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("kids");
};
