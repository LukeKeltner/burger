var connection = require('../config/connection.js');

var orm = 
{
	selectAll: function(table, cb)
	{
		connection.query("SELECT * FROM ?", [table], function(err, result)
		{
			if(err){throw err};
			cb(result);
		});
	},

	insertOne: function(table, burger_name, cb)
	{
		connection.query("INSERT INTO ?(burger_name, devoured) VALUES(?,?)", [table, burger_name, false], function(err, result)
		{
			if (err){throw err};
			cb(result);
		});
	},

	updateOne: function(table, id, devoured, cb)
	{
		connection.query("UPDATE ? SET devoured = ? WHERE id = ?", [table, id, devoured], function(err, result)
		{
			if(err){throw err};
			cb(result);
		});
	}
};

module.exports = orm;