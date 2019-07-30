const db = require("../data/dbConfig.js");

module.exports = {
    findById,
    findBy,
    getAll,
    addKid,
    findByUserId
};

function findById(id) {
    return db("kids")
        .where({ id })
        .first();
}

function findBy(filter) {
    return db("kids").where(filter);
}

function getAll() {
    return db("kids");
}

function findByUserId(user_id) {
    return db("kids")
        .where({user_id});
}

async function addKid(kid) {
    const [id] = await db("kids").insert(kid, "id");
    return findById(id);
}
