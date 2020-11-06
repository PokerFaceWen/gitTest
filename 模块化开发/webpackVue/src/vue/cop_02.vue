<template>
  <div class="title_02">
    <h2>{{msg}}</h2>
    <button @click="btnClick" style="font-size: 30px">{{info}}</button>
  </div>
</template>

<script>
  export default {
    name: "cop_02",
    data(){
      return{
        msg:'cop_02',
        info:'MyCop_02'
      }
    },
    methods:{
      btnClick(){
        console.log('cop_02 Click');
      }
    }
  }
</script>

<style scoped>
  .title_02{
    color: red;
  }
</style>