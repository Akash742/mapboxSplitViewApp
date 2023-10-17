mapboxgl.accessToken = "pk.eyJ1IjoibmVlbGR1dHRhMTkiLCJhIjoiY2tweG9mN3F4MThrNTJ4cDk0enVjcTN4dCJ9.uxa_h0rjqumTxFMI1QELKQ";

const map1 = new mapboxgl.Map({
  container: "map1",
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [-74.006, 40.7128],
  zoom: 10
});

const map2 = new mapboxgl.Map({
  container: "map2",
  style: 'mapbox://styles/mapbox/satellite-v9',
  center: [-74.006, 40.7128],
  zoom: 10
});

document.addEventListener('DOMContentLoaded', function() {
	let wrapper = document.querySelector('#wrapper');
	let topLayer = wrapper.querySelector('#map2'); // Select the top map container
	let handle = wrapper.querySelector('.handle');
	let skew = 0;
	let delta = 0;
  
	if (wrapper.className.indexOf('skewed') !== -1) {
	  skew = 1000;
	}
  
	wrapper.addEventListener('mousemove', function(e) {
	  delta = (e.clientX - window.innerWidth / 2) * 0.5;
	  handle.style.left = e.clientX + delta + 'px';
	  topLayer.style.width = e.clientX + skew + delta + 'px';
	});
  });
  
  
