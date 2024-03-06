const {authenticateJWT} = require('../Middleware/JWTValidation')
const login = require('./LogIn')
const Report = require('./fetchData')
const express = require("express")

const router = express.Router()

router.get('/Report',authenticateJWT,Report)
router.post("/login",login)

module.exports=router