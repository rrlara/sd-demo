
<template>

<div id="card">

	<el-card class="box-card"
    :class="{ 'activeCall': call.properties.CallStatus == 'active' }">

      <div slot="header" class="clearfix">
        <span style="font-size: 20px;">{{call.properties.Type}}</span>
      </div>
      <div class="text item">
        <span style="font-size: 14px;">Units: {{call.properties.Units}}</span>
      </div>
      <div class="text item">
        <span style="font-size: 14px;">{{formatDate(call.properties.DateTime)}}</span>
      </div>
      <div class="text item">
        <span style="font-size: 14px;">{{call.properties.Address}}</span>
      </div>

    </el-card>

</div>

</template>
<script>

import { mapState, mapActions } from 'vuex'

import moment from 'moment'

export default {
  name: 'card',
  props: ['call'],
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

.el-card{
  margin-bottom: 10px;
  color: gray;
}

.el-card:hover{
  /*color: gray;*/
  border: 1px solid #4FC08D;
}

.el-card__body {
    padding: 10px !important;
}

.activeCall {
  background-color: #83d2af;
  color: #fff;
  font-weight: 600;
}


</style>