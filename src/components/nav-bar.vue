<template>
  <div class="nav-bar">
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
  </div>
</template>

<script>

import { mapState, mapActions } from 'vuex'

export default {
  name: 'navBar',
  data () {
    return {
      msg: ''
    }
  },
  computed: {
    ...mapState({
      loading: 'loading'
    })
  },
  mounted() {
    // this.FETCH_ITEMS();
  },
  methods: {
    ...mapActions([
        'FETCH_ITEMS'
      ])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
