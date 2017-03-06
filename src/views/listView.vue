<template>
  <div class="listContainer">

  <navbar></navbar>
    <el-row>
      <el-col :sm="24" :xs="24" class="list" v-if="calls">

      <h4>active calls are in green</h4>

      <card v-for="(call, index) in calls.features" :call="call" :key="index"></card>

      </el-col>
    </el-row>
  </div>
</template>

<script>

import { mapState, mapActions } from 'vuex'

import Nav from '../components/nav-bar'
import Card from '../components/card'



export default {
  name: 'list',
  components:{
    Card,
    navbar: Nav
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

  },
  methods: {
    formatDate: function (date) {
      return moment(date).format('MMMM Do YYYY, h:mm:ss a');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.listContainer{
  height: calc(100% - 60px);
  overflow: auto;
}
.list{
  height: calc(100%);
  /*background-color: blue;*/
  padding: 10px;
  overflow: auto;
}




</style>
