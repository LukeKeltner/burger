$(document).on("click", ".devour", function(event)
{
	var ID = $(this).attr("id");
	console.log(ID)
	var id =
	{
		id: ID
	};

	$.ajax(
	{
		url: '/delete/'+id,
		data: id,
		type: 'put'
	}).done(function(result)
	{
		window.location.reload()
	});

});