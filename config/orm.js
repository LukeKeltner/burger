var connection = require('connection');

var orm = 
{
	selectAll: function(table)
	{
		connection.query("SELECT * FROM ?", [table], function(err, result)
		{
			if(err){throw err}
		});
	},

	insertOne: function(table, burger_name)
	{
		connection.query("INSERT INTO ?(burger_name, devoured) VALUES(?,?)", [table, burger_name, false], function(err, result)
		{
			if (err){throw err}
		});
	},

	updateOne: function(table, id, devoured)
	{
		connection.query("UPDATE ? SET devoured = ? WHERE id = ?", [table, id, devoured], function(err, result)
		{
			if(err){throw err}
		});
	}
};

module.exports = orm;