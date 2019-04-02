$(document).ready(function(){
	
	setContent("about");
	
	$("#menu li a").click(function(event){
		event.preventDefault();
		
		setContent($(this).attr('href'));
    });
});

function setContent(content_name)
{
	$.ajax({
		cache: false,
		type: "GET",
		dataType: "html",
		url: "html/" + content_name + ".html"
	})
	.done(function(resp){
		$("#main_section").html(resp);	
		getAllPlanes();
	})
	.fail(function(){
		$("#main_section").html("Page not found.");
	});	
}