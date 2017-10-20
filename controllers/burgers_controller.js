var express = require('express');
var burger = require('../models/burger.js')

var router = express.Router();

router.get("/", function(req, res)
{
	burger.all(function(result)
	{
		console.log(result[0].devoured)
	})
	res.render("index",{})
})

module.exports = router;