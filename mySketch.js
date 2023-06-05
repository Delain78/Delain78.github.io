function setup() {

	simple ();
	
}

function draw() {
	
	fill ('darkolivegreen');
	circle (400,300,300);
	
	fill (random ( [ 'darkseagreen', 'darkTurquoise', 'DeepSkyBlue' ] ) );
	circle (400,300,200);
	
	fill (random ( [ 'DimGray', 'Goldenrod', 'PaleGreen' ] ) );
	circle (400,300,100);
	
}
