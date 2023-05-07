const express = require('express');
const User = require('./User');
const router = express.Router();

// colocar las rutas aquí
router.use("/users", User); // la ejecutamos


module.exports = router;