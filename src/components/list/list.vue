<template>
  <div class="">
    <el-row class='containers'>
      <el-col :sm="24" :xs="24" class="list" v-if="calls">

      <h4>active calls are in green</h4>

      <card v-for="(call, index) in calls.features" :call="call" :key="index"></card>

      </el-col>
    </el-row>
  </div>
</template>

<script>

import { mapState, mapActions } from 'vuex'

import Card from '../card'

export default {
  name: 'list',
  components:{
    Card
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
  /*background-color: blue;*/
  padding: 10px;
}




</style>
