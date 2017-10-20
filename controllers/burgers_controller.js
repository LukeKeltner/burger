var express = require('express');
var burger = require('../models/burger.js');

var router = express.Router();

router.get("/", function(req, res)
{
	burger.all(function(result)
	{
		var burgersDevoured = [];
		var readyToEatBurgers = [];

		for (var i=0; i<result.length; i++)
		{
			if (result[i].devoured === 0)
			{
				readyToEatBurgers.push(result[i]);
			}

			else
			{
				burgersDevoured.push(result[i]);
			}
		}

		console.log(readyToEatBurgers);

		res.render("index",
		{
			burgersToEat: readyToEatBurgers,
			burgersEaten: burgersDevoured
		});
	});
});

module.exports = router;