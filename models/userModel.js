const db = require("../data/dbConfig.js");

module.exports = {
  findById,
  findBy,
  getAll,
  addUser,
  updateUser
};

function findById(id) {
  return db("users")
    .where({ id })
    .first();
}

function findBy(filter) {
  return db("users").where(filter);
}

function getAll() {
  return db("users");
}

async function addUser(user) {
  const [id] = await db("users").insert(user, "id");
  return findById(id);
}

async function updateUser(id, updatedUser) {
  const count = await db("users")
    .where({ id })
    .update(updatedUser);
  return findById(id);
}
