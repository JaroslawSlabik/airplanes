function getAllPlanes()
{
	$.ajax({
		cache: false,
		type: "POST",
		dataType: "json",
		url: "../samoloty/php/load_all_planes.php"
	})
	.done(function(json) {
		console.log(json);
		
		var list_planes = [];
		
		var saved_id = json['saved_id'];
		
		$.each(json, function(key, val) {
			
			if(key == 'saved_id')
			{
				return true; //continue
			}
			
			var plane = "<IMG class='plane' title='" + val['name'] + "' src='../samoloty/resources/images/" + val['name'] + ".jpg' onclick='getPlaneById("+ val['id'] +");' height='400' width='200' />";
			
			list_planes.push(plane);
		});

		$("#table_img").html(list_planes.join(""));
		
		if(-1 != saved_id)
		{
			$("#description_body").html(json[saved_id]['description']);
			$("#description_body").addClass("show");
		}
		else
		{
			$("#description_body").html("");
			$("#description_body").removeClass("show");
		}
	})
	.fail(function( jqxhr, textStatus, error ) {
			console.log(jqxhr);
			console.log(textStatus);
			console.log(error);
	});
}

function getPlaneById(id_plane)
{
	$.ajax({
		cache: false,
		type: "POST",
		dataType: "json",
		url: "../samoloty/php/load_plane_by_id.php",
		data: {
			id_plane: id_plane
		}
	})
	.done(function(json) {
		console.log(json);
		
		$("#description_body").html(json['description']);
	})
	.fail(function( jqxhr, textStatus, error ) {
			console.log(jqxhr);
			console.log(textStatus);
			console.log(error);
	});
}