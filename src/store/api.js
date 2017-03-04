import axios from 'axios'
var GeoJSON = require('geojson');

import storeState  from './index'

function fetch () {

	storeState.state.loading = true;

	// Make a request for a 911 calls
	return axios.get('http://gs-public911.appspot.com/calls')
	  .then(function (response) {
	    console.log(response);

	    storeState.state.loading = false;

	    return GeoJSON.parse(response.data, {Point: ['Latitude', 'Longitude']});
	  })
	  .catch(function (error) {
	    console.log(error);
	    storeState.state.loading = false;
	  });
}

export function fetchCalls () {
  return fetch()
}