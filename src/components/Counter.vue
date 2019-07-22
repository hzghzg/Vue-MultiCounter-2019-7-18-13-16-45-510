<template>
  <div id="counter">
    <p>{{count}}</p>
    <label @click="myclick1"><input type="button" value="点我+" @click="add" ></label>
    <label @click="myclick2"><input type="button" value="点我-" @click="sub"></label>
  </div>
</template>

<script>
export default{
  name: 'counter',
  data(){
    return{
      count:0
    };
  },
  methods:{
    add(){
      this.count++

    },
    sub(){
      this.count--
    },
    myclick1(){
        this.$emit('trigger_1')
    },
    myclick2(){
        this.$emit('trigger_2')
    },
    beforeCreate(){
      this.count=0
    },
    beforeDestroy(){
      this.count=0
      this.$emit("destroyTotal",this.count)
    }
  },
  components: {
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