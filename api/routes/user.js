const express = require('express');
const router = express.Router();
const validate = require('../../middleware/validator'); // Validator



const {
    logInSchema,
    registerUserSchema
} = require("../validators/user");





module.exports = router;