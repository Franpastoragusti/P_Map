var mymap = L.map('mapid').setView([39.4688, -0.3616], 13);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpandmbXliNDBjZWd2M2x6bDk3c2ZtOTkifQ._QA7i5Mpkd_m30IGElHziw', {
	maxZoom: 18,
	attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
		'<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
		'Imagery © <a href="http://mapbox.com">Mapbox</a>',
	id: 'mapbox.streets'
}).addTo(mymap);

L.marker([39.4696, -0.37886]).addTo(mymap).bindPopup("<b>Hello world!</b><br />I am a popup.").openPopup();

L.circle([39.45369, -0.39542], 500, {
	color: 'red',
	fillColor: '#f03',
	fillOpacity: 0.5
}).addTo(mymap).bindPopup("I am a circle.");

L.polygon([
	[39.4794, -0.34478],
	[39.4737, -0.34736],
	[39.46774, -0.33774],
	[39.48285, -0.3374]
]).addTo(mymap).bindPopup("I am a polygon.");

var popup = L.popup();

function onMapClick(e) {
	popup.setLatLng(e.latlng).setContent("You clicked the map at " + e.latlng.toString()).openOn(mymap);
}

mymap.on('click', onMapClick);