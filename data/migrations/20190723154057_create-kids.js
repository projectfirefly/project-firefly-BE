exports.up = function(knex) {
    return knex.schema.createTable("kids", kids => {
        kids.increments("id").primary();

        kids.string("first_name", 255);
        kids.string("last_name", 255);

        kids
            .integer("user_id")
            .unsigned()
            .references("id")
            .inTable("users")
            .onDelete("CASCADE")
            .onUpdate("CASCADE");
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("kids");
};
