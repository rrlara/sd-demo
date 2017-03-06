<template>
  <div id="app">
    <!-- <div class="pagesContainer"> -->

      <transition name="fade">
      <router-view></router-view>
      </transition>

    <!-- </div> -->
  </div>
</template>

<script>

import { mapState, mapActions } from 'vuex'

export default {
  name: 'app',
  computed: {

  },
  mounted() {

    this.FETCH_ITEMS();

  },
  methods: {
    ...mapActions([
        'FETCH_ITEMS'
      ])
  }
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
  position: absolute;
  top: 0px;
  bottom: 0px;
  width: 100%;
  /*background-color: gray;*/
  overflow: hidden;
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
