mapboxgl.accessToken = "pk.eyJ1IjoibmVlbGR1dHRhMTkiLCJhIjoiY2tweG9mN3F4MThrNTJ4cDk0enVjcTN4dCJ9.uxa_h0rjqumTxFMI1QELKQ";
	
var map1 = new mapboxgl.Map({
	container: 'map1',
	style: 'mapbox://styles/mapbox/streets-v11',
	center: [-74.0066, 40.7135],
	zoom: 12
});

var map2 = new mapboxgl.Map({
	container: 'map2',
	style: 'mapbox://styles/mapbox/satellite-v9',
	center: [-74.0066, 40.7135], // Center on the same location
	zoom: 12
});