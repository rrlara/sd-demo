<template>
  <div id="map" style="left: 0px;">
  </div>
</template>

<script>

import { mapState, mapActions } from 'vuex'

var map;
var popup;

export default {
  name: 'app',
  computed: {
    ...mapState({
      calls: 'items',
      currentCall: 'currentCall'
    })
  },
  watch: {

    'currentCall': function () {
      if (this.currentCall) {
          map.setFilter("call-outer-hl", ["==", "IncidentNumber", this.currentCall.properties.IncidentNumber]);
          map.setFilter("call-hl", ["==", "IncidentNumber", this.currentCall.properties.IncidentNumber]);

          map.flyTo({center: this.currentCall.geometry.coordinates});
      }
    }
  },
  mounted() {

    this.initMap();

  },
  methods: {
    ...mapActions([
        'CURRENT_CALL'
      ]),

    initMap: function () {
      var vm = this;

        mapboxgl.accessToken = 'pk.eyJ1IjoicnJsYXJhIiwiYSI6IjNjSlJmUkkifQ.PlJc5PGK-7-EDMmsfqYKfg';

        map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/dark-v9',
            center: [-122.340331,47.6147624],
            zoom: 11
        });
        map.on('style.load', function () {

          map.addSource('call-points', {
            "type": "geojson",
            "data": {
              "type": "FeatureCollection",
              "features": []
            }
          });

          map.addLayer({
                  "id": 'call-outer',
                  "source": "call-points",
                  "type": "circle",
                  "paint": {
                    "circle-radius": 12,
                    "circle-opacity": 0.4,
                    'circle-color': {
                            property: 'CallStatus',
                            type: 'categorical',
                            stops: [
                                ['active', '#83d2af'],
                                ['closed', '#fff']]
                        }
                  }
                });

              map.addLayer({
                    "id": 'call',
                    "source": "call-points",
                    "type": "circle",
                    "paint": {
                      "circle-radius": 5,
                      'circle-color': {
                            property: 'CallStatus',
                            type: 'categorical',
                            stops: [
                                ['active', '#83d2af'],
                                ['closed', '#fff']]
                        }
                    }
                  });


          // Hightlights
          map.addLayer({
              "id": 'call-outer-hl',
              "source": "call-points",
              "type": "circle",
              "paint": {
                "circle-radius": 11,
                "circle-color": '#ffffff',
                "circle-opacity": 0.1,
                "circle-stroke-color": '#4fc08d',
                "circle-stroke-width": 1
              },
                "filter": ["==", "IncidentNumber", ""]
            });

          map.addLayer({
              "id": 'call-hl',
              "source": "call-points",
              "type": "circle",
              "paint": {
                "circle-radius": 8,
                "circle-color": '#324157'
              },
                "filter": ["==", "IncidentNumber", ""]
            });



          map.getSource('call-points').setData(vm.calls);



      });

      //CLICK EVENT FOR THE MAP
      map.on('click', function (e) {

        var vm2 = vm;

        // Use queryRenderedFeatures to get features at a click event's point
        // Use layer option to avoid getting results from other layers
          var features = map.queryRenderedFeatures(e.point, { layers: ['call-outer'] });
          // if there are features within the given radius of the click event,
        // fly to the location of the click event
        if (features.length) {
            // Get coordinates from the symbol and center the map on those coordinates
            map.flyTo({center: features[0].geometry.coordinates});

            //SET CLICKED CALL TO THE CURRENT CALL ON THE STATE
            vm2.CURRENT_CALL(features[0]);

          }
        });

            // Create a popup, but don't add it to the map yet.
                popup = new mapboxgl.Popup({
                    closeButton: false,
                    closeOnClick: false
                });

            // Use the same approach as above to indicate that the symbols are clickable
            // by changing the cursor style to 'pointer'.
            map.on('mousemove', function (e) {
              var vm2 = vm;

              if(vm2.calls){
                var features = map.queryRenderedFeatures(e.point, { layers: ['call-outer'] });
                map.getCanvas().style.cursor = features.length ? 'pointer' : '';

                if (features.length) {
                    popup.remove();
                    // return;

                    var newDiv = document.createElement('div');
                      newDiv.innerHTML = features[0].properties.CallStatus;
                      popup.setLngLat(features[0].geometry.coordinates).setDOMContent(newDiv).addTo(map);
                }

                if (!features.length) {
                  popup.remove();
                }
              }

            });
      }



  }
}
</script>

<style>

#map{

  position: relative;
  height: calc(100% - 60px);
  width: 100%;
  left: 0px;
  /*top: 60px;*/
}
.mapboxgl-canvas-container {
  left: 0px;
  position: absolute;
}

</style>
