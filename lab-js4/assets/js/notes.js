var objects = ['1', '2', '3', '4', '5', '6'];
var colors = ['red', 'blue', 'yellow'];

$('.button').click(function() {
	var 
	random_object_number = Math.floor(Math.random() * objects.length );
	random_color_number = Math.floor(Math.random() * colors.length );
	objects_to_use = objects[random_object_number],
	color_to_use = colors[random_color_number],
	result = '<span class="' + color_to_use + '">' + objects_to_use + '</span>';

	//console.log(random_object);
	$('.content').append(result);
	//$('.content').append('objects[random_object_number]');
	//$('.content').append('<img src="assets/img/cat.jpg" />');

});