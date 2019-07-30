const db = require("../data/dbConfig.js");

module.exports = {
    findById,
    findByKidId,
    addAvatar,
};

function findById(id) {
    return db("avatars")
        .where({ id })
        .first();
}

function findByKidId(kid_id) {
    return db("avatars")
        .where({kid_id})
        .first();
}

async function addAvatar(avatar) {
    const [id] = await db("avatars").insert(avatar, "id");
    return findById(id);
}