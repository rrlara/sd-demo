<template>
  <div class="nav-bar">
    <el-menu theme="dark" class="el-menu-demo" mode="horizontal" >

        <!-- ROUTE WITH HREF TAG -->
        <a href="/">
          <el-menu-item index="1" >Home</el-menu-item>
        </a>

        <!-- ROUTE WITH VUE-ROUTER -->
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

.el-menu-item{
  color: #fff;
  font-size: 20px;
}

.router-link-active li{
  background-color: #83d2af;
  color: #fff;
  font-size: 20px;
}

.el-menu--horizontal.el-menu--dark .el-menu-item:hover, .el-menu--horizontal.el-menu--dark .el-submenu__title:hover{
  background-color: #83d2af;
}

.updateButton{
  float: right;
    margin-right: 20px;
    margin-top: 10px;
}

</style>
