<template>
  <div id="countergroup">
      <input type="text" v-model="counterNum">
      <div v-if="counterNum"  >
          <counter v-for="index in parseInt(counterNum)" :key="index"  :counterIndex="keyList[parseInt(index)-1]" @trigger="getChildData"></counter>
          <lable>总和为：<input type="text" v-model.number="counterSum" ></lable>
      </div>
  </div>
</template>
<script>
import Counter from  '../components/Counter.vue'
export default {
  name: 'countergroup',
  data(){
    return{
      counterNum:0,
      keyList:new Array(this.counterNum).fill(0).map((item,index)=>index),
      countList:new Array(this.counterNum).fill(0),
      counterSum:0
    };
  },
  methods:{
      getChildData(childCount,childIndex){
          this.countList[childIndex]=childCount;
          this.counterSum=this.countList.reduce((p,c)=>p+c,0)
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