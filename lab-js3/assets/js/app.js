var objects = ['assets/img/cat.jpg',
			   'assets/img/frog.jpg',
			   'assets/img/gorilla.jpg',
			   'assets/img/puppy.jpg',
			   'assets/img/seal.jpg',
			   ' meow ',
			   ' ribbit ',
			   ' rawr ',
			   ' woof ',
			   ' arp ',
				];
var colors = ['red', 'blue', 'yellow'];

$('.button').click(function() {
	var 
	random_object_number = Math.floor(Math.random() * objects.length );
	random_color_number = Math.floor(Math.random() * colors.length );
	objects_to_use = objects[random_object_number],
	color_to_use = colors[random_color_number],
	result = '';

	if(random_object_number > 4) {
			result = '<span class="object ' + color_to_use + '">' + objects_to_use + '<span/>';
		}
		else {
			result = '<img class="object ' + color_to_use + '" src="' + objects_to_use + '"/>';
		}

	//console.log(random_object);
	$('.content').prepend(result);
	//$('.content').append('objects[random_object_number]');
	//$('.content').append('<img src="assets/img/cat.jpg" />');

});