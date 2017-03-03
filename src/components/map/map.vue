<template>
  <div class="mapContainer">
      <el-menu theme="dark" class="el-menu-demo" mode="horizontal" >
      <router-link to="/">
        <el-menu-item index="3">Home</el-menu-item>
      </router-link>
      <el-menu-item index="1">Map</el-menu-item>
      <el-menu-item index="3">List</el-menu-item>
    </el-menu>

    <el-row class='containers'>
      <el-col :sm="18" :xs="24" class="map">
        <div class="grid-content bg-purple"></div>
      </el-col>
      <el-col :sm="6" :xs="24" class="list">
        <div class="grid-content bg-purple-light"></div>
      </el-col>
    </el-row>

  </div>
</template>

<script>

import { mapState, mapActions } from 'vuex'

export default {
  name: 'mapContianer',
  data () {
    return {
    }
  },
  computed: {
    ...mapState({
      items: 'items'

    })
  },
  mounted() {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.mapContainer{
  position: absolute;
  width: 100%;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
}

.containers{
  height: calc(100% - 60px);
}
.map{
  height: calc(100%);
  background-color: gray;
}
.list{
  height: calc(100%);
  background-color: blue;
}

</style>
