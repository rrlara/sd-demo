<template>
  <div id="app">
      <el-menu theme="dark" class="el-menu-demo" mode="horizontal" >
        <router-link to="/">
          <el-menu-item index="1">Home</el-menu-item>
        </router-link>
        <router-link to="/map">
          <el-menu-item index="2">Map</el-menu-item>
        </router-link>
        <router-link to="/list">
          <el-menu-item index="3">List</el-menu-item>
        </router-link>

        <el-button type="primary" size="large" class="updateButton" :loading="loading"
        @click="FETCH_ITEMS()">
          <span v-if="!loading">Update Calls</span>
          <span v-else>Loading.....</span>
        </el-button>
      </el-menu>
    <div class="pagesContainer">

    <transition name="fade">
      <router-view></router-view>
      </transition>

    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'app',
  computed: {
    ...mapState({
      items: 'items',
      loading: 'loading'
    })
  },
  mounted() {
    this.FETCH_ITEMS();
  },
  methods: {
    ...mapActions([
        'FETCH_ITEMS'
      ])
  },
}
</script>

<style>
body {
    display: block;
    margin: 0px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*margin-top: 60px;*/
}

.updateButton{
  float: right;
    margin-right: 20px;
    margin-top: 10px;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0
}
</style>
