mapboxgl.accessToken = "pk.eyJ1IjoibmVlbGR1dHRhMTkiLCJhIjoiY2tweG9mN3F4MThrNTJ4cDk0enVjcTN4dCJ9.uxa_h0rjqumTxFMI1QELKQ";

// Define the center coordinates and zoom level for alignment
const centerCoordinates = [-74.006, 40.7128];
const zoomLevel = 10;

// Create map1
const map1 = new mapboxgl.Map({
  container: 'map1',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: centerCoordinates,
  zoom: zoomLevel,
});

// Create map2
const map2 = new mapboxgl.Map({
  container: 'map2',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: centerCoordinates,
  zoom: zoomLevel,
});


// Define the bounds you want to use for alignment
const bounds = new mapboxgl.LngLatBounds(
	new mapboxgl.LngLat(-74.1, 40.7), // Southwest corner
	new mapboxgl.LngLat(-73.9, 40.8)  // Northeast corner
);
	
	// Set the bounds for both maps
	map1.fitBounds(bounds);
	map2.fitBounds(bounds);
	
	document.addEventListener('DOMContentLoaded', function() {
		let wrapper = document.querySelector('#wrapper');
		let topLayer = wrapper.querySelector('#map2'); // Select the top map container
	let handle = wrapper.querySelector('.handle');
	let delta = 0;
  
	wrapper.addEventListener('mousemove', function(e) {
	  delta = (e.clientX - window.innerWidth / 2) * 0.5;
	  handle.style.left = e.clientX + delta + 'px';
	  topLayer.style.width = e.clientX + delta + 'px';
	});
  });
