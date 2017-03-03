<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'app',
  computed: {
    ...mapState({
      items: 'items'

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
</style>
