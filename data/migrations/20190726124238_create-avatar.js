exports.up = function(knex) {
    return knex.schema.createTable("avatars", avatars => {
        avatars.increments("id").primary();

        avatars.int("color", 255);
        avatars.int("accessory", 255);
        avatars.string("nickname", 255);

        avatars
            .integer("kid_id")
            .unsigned()
            .references("id")
            .inTable("kids")
            .onDelete("CASCADE")
            .onUpdate("CASCADE");
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("avatars");
};
