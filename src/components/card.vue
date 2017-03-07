
<template>

<div id="card" @click='CURRENT_CALL(call)'>

	<el-card class="box-card"
    :class="{ 'activeCall': call.properties.CallStatus == 'active', 'currCall' : makeActive(call) }">

      <span style="font-size: 20px;">{{call.properties.Type}}</span>

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

  computed: {
    ...mapState({
      currentCall: 'currentCall'
    })
  },
  methods: {
    ...mapActions([
        'CURRENT_CALL'
      ]),

    makeActive: function (item) {


      if(this.currentCall) {

        if ( item.properties.IncidentNumber == this.currentCall.properties.IncidentNumber ) {
          return true
        }else{
          return false
        }

      }

    },

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

.el-card__body {
    padding: 20px;
    display: none !important;
}

.el-card:hover{
  /*color: gray;*/
  /*border: 1px solid #4FC08D;*/
}

.el-card__body {
    padding: 10px !important;
}

.activeCall {
  /*background-color: #83d2af;*/
  /*color: #4FC08D;*/
  border-left: 10px solid #83d2af;
  border-right: 10px solid #83d2af;
  /*font-weight: 600;*/
}

.currCall {
  background-color: #324157;
  color: #fff;
  /*font-weight: 600;*/
}


</style>