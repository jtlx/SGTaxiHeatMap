var taximap;
$(document).ready(function() {
    taximap = L.map('taximap', {crs: L.CRS.EPSG4326}).setView([1.3521, 103.8198], 11);
	L.tileLayer('YOUR TILE LAYER HERE', { // if in doubt, use Mapbox's tile layers
		attribution: '',
		maxZoom: 17,
	}).addTo(taximap);
});
$.getJSON("http://127.0.0.1:8000/taxi_output.json", function(data) {
        console.log(data); // this will show the info it in firebug console
        var taxi2DArr = data["features"][0]["geometry"]["coordinates"];
        for(var i in taxi2DArr) {
        	// swap lng/lat
            var swap = taxi2DArr[i][1];
            taxi2DArr[i][1] = taxi2DArr[i][0];
            taxi2DArr[i][0] = swap;
            // set opacity for all the points
            taxi2DArr[i].push(0.5);
        }
        var heat = L.heatLayer(taxi2DArr, {radius: 15, blur: 8}).addTo(taximap);
});
