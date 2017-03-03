import axios from 'axios'
var GeoJSON = require('geojson');

function fetch () {

	// Make a request for a 911 calls
	return axios.get('http://gs-public911.appspot.com/calls')
	  .then(function (response) {
	    console.log(response);

	    return GeoJSON.parse(response.data, {Point: ['Latitude', 'Longitude']});
	  })
	  .catch(function (error) {
	    console.log(error);
	  });
}

export function fetchCalls () {
  return fetch()
}