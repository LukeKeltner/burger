var connection = require('../config/connection.js');

var orm = 
{
	selectAll: function(table, cb)
	{
		var query = "SELECT * FROM "+table;
		connection.query(query, function(err, result)
		{
			if(err){throw err};
			cb(result);
		});
	},

	insertOne: function(table, burger_name, cb)
	{
		var query = 'INSERT INTO '+table+'(burger_name, devoured) VALUES('+burger_name+', FALSE)'
		connection.query(query, function(err, result)
		{
			if (err){throw err};
			cb(result);
		});
	},

	updateOne: function(table, id, cb)
	{
		var query = 'UPDATE '+table+' SET devoured = TRUE WHERE id = '+id;
		connection.query(query, function(err, result)
		{
			if(err){throw err};
			cb(result);
		});
	}
};

module.exports = orm;