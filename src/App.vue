<template>
  <div id="app">

      <transition name="fade">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </transition>

  </div>
</template>

<script>

import { mapActions } from 'vuex'

export default {
  name: 'app',
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
  position: absolute;
  top: 0px;
  bottom: 0px;
  width: 100%;
  overflow: hidden;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0
}
</style>
