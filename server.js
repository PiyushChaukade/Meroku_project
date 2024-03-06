const express = require("express")
const Report = require('./CrudOperation/CRUD.js')
const bodyParser = require('body-parser');

const app = express()

const cors = require('cors')

app.use(cors())

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/" , Report)

module.exports=app