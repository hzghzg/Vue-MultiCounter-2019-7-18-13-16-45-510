<template>
  <div id="app">
    <input type="text" v-model="data1">
    <counter-group></counter-group>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import CounterGroup from './components/CounterGroup.vue'
import axios from "axios";
export default {
  name: 'app',
  data(){
    return{
      count:0,
      data1:null
    };
  },
  mounted(){
    const self=this;
    axios.get('http://localhost:7788/hello').then(response=>{
      self.data1=response.data;
      });
  },
  components: {
    CounterGroup
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
