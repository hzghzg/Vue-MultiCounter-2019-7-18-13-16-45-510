<template>
  <div id="countergroup">
      <input type="text" v-model="counterNum" @input="resetSum">
      <div v-if="counterNum"  >
          <counter v-for="index in parseInt(counterNum)" :key="index" @trigger_1="getChildData_1" @trigger_2="getChildData_2" @destroyTotal="parentDestroyTotal"></counter>
      </div>
      <label>总和为：<input type="text" v-model.number="counterSum" ></label>
  </div>
</template>
<script>
import Counter from  '../components/Counter.vue'
export default {
  name: 'countergroup',
  data(){
    return{
      counterNum:0,
      counterSum:0
    };
  },
  methods:{
      getChildData_1(){
          this.counterSum++
      },
      getChildData_2(){
          this.counterSum--
      },
     parentDestroyTotal(subNum){
       this.counterSum-=subNum
     },
     resetSum(){
       this.counterSum=0;
     }
    
  },
  components: {
      Counter
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>