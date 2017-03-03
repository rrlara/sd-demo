import axios from 'axios'

function fetch () {

	// Make a request for a user with a given ID
	return axios.get('http://gs-public911.appspot.com/calls')
	  .then(function (response) {
	    console.log(response);
	    return response.data;
	  })
	  .catch(function (error) {
	    console.log(error);
	  });
}

export function fetchCalls () {
  return fetch()
}