const {getAllUsers, getUserById, updateUser, deleteUser, createUser } = require('../controllers/User.controller');
const express = require('express');

const User = express.Router();

User.route("/")
	.get(getAllUsers)
    .post(createUser)
User.route("/:id")
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser)
module.exports = User;