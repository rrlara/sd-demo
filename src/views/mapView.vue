<template>
  <div class="mapViewContainer">
    <!-- NAV-BAR COMOPONENT -->
    <navbar></navbar>
    <el-row class='containers'>
      <el-col :sm="18" :xs="24" class="map">

        <!-- MAP COMOPONENT -->
        <map-time v-if="calls.features"></map-time>

      </el-col>
      <el-col :sm="6" :xs="24" class="list">

        <h4>active calls are in green</h4>

        <!-- CARD COMOPONENT -->
        <card v-for="(call, index) in calls.features" :call="call" :key="index"></card>

      </el-col>
    </el-row>
  </div>
</template>

<script>

import { mapState } from 'vuex'

import Nav from '../components/nav-bar'
import Card from '../components/card'
import Map from '../components/map'

export default {
  name: 'mapContianer',
  components: {
    Card,
    navbar: Nav,
    mapTime: Map
  },
  data () {
    return {
    }
  },
  computed: {
    ...mapState({
      calls: 'items'

    })
  },
  mounted() {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.mapViewContainer{
  position: absolute;
  width: 100%;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
}

.containers{
  height: calc(100% - 0px);
}
.map{
  height: calc(100% - 0px);
  background-color: gray;
}
.list{
  height: calc(100%);
  /*background-color: blue;*/
  overflow: auto;
  padding: 5px;
  position: relative;
}

</style>
