import { setupMap, renderVector, renderRaster } from "./script.js";

// Turn component with given id into mapbox 
// Use the given COG server url for rendering the raster layers
setupMap("map1", "https://cog-nk.kesowa.com").then(() =>{
  
  // Center on first geojson url
  // Render all given geojson urls
  renderVector([
    "https://cdn-dev.kesowa.com/vector/00854a1e-568d-42db-84e9-a310df7593c9.geojson",
    "https://cdn-dev.kesowa.com/vector/59af3119-fd68-48d0-966a-9a0008ec2b18.geojson"
  ])

  // Center on first raster url
  // Render all given ortho urls
  renderRaster([
    "http://172.17.0.1:5151/raster/a0789482-62c7-4ab5-b9a4-9f83694d0a9e.tif",
    "http://172.17.0.1:5151/raster/f6b443a1-7724-4bd6-9be9-4f33fd0fc98c.tif"
  ])
})
.catch((error) => 
  console.error("Error loading map", error)
)

setupMap("map2", "https://cog-nk.kesowa.com").then(() =>{
  
  // Center on first geojson url
  // Render all given geojson urls
  renderVector([
    "https://cdn-dev.kesowa.com/vector/00854a1e-568d-42db-84e9-a310df7593c9.geojson",
    "https://cdn-dev.kesowa.com/vector/59af3119-fd68-48d0-966a-9a0008ec2b18.geojson"
  ])

  // Center on first raster url
  // Render all given ortho urls
  renderRaster([
    "http://172.17.0.1:5151/raster/a0789482-62c7-4ab5-b9a4-9f83694d0a9e.tif",
    "http://172.17.0.1:5151/raster/f6b443a1-7724-4bd6-9be9-4f33fd0fc98c.tif"
  ])
})
.catch((error) => 
  console.error("Error loading map", error)
)

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