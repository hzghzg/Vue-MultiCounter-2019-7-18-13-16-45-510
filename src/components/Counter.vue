<template>
  <div id="counter">
    <p>{{count}}</p>
    <div @click="myclick">
        <input type="button" value="点我+" @click="add">
        <input type="button" value="点我-" @click="sub">
    </div>
  </div>
</template>

<script>
export default {
  name: 'counter',
  data(){
    return{
      count:0
    };
  },
  methods:{
    add(){
      this.count++;
    },
    sub(){
      this.count--;
    },
    myclick(){
        this.$emit('trigger',this.count,parseInt(this.counterIndex))
    }
  },
  components: {
  },
  props:['counterIndex']
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