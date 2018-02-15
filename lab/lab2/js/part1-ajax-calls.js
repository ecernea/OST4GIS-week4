/**
 * Using ajax, download some data from a remote server and log it to the console
 */
 var geojsonMarkerOptions = {
     radius: 8,
     fillColor: "#ff7800",
     color: "#000",
     weight: 1,
     opacity: 1,
     fillOpacity: 0.8
 };
 var MN = $.ajax("https://opendata.arcgis.com/datasets/8529687b17e44acf88d52ee696821854_0.geojson").then(function(res){L.geoJson(res, {
     pointToLayer: function (feature, latlng) {
     return L.circleMarker(latlng, geojsonMarkerOptions);
     }
 }).addTo(map);});
var map = L.map('map', {
  center: [44.9778, -93.2650],
  zoom: 12
});
var Stamen_TonerLite = L.tileLayer('http://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}.{ext}', {
  attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  subdomains: 'abcd',
  minZoom: 0,
  maxZoom: 20,
  ext: 'png'
}).addTo(map);
