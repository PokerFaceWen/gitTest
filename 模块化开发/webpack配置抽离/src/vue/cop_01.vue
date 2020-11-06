<template>
  <div class="title">
    <h2>{{msg}}</h2>
    <button style="font-size: 20px" @click="btnClick">
      {{name}}
    </button>
    <cop_02/>
  </div>
</template>

<script>
  import cop_02 from "./cop_02.vue";

  export default {
    name: "cop_01",
    components: {
      cop_02
    },
    data() {
      return {
        msg: 'WebPackVue',
        name: 'Click'
      }
    },
    methods: {
      btnClick() {
        console.log('btnClick');
      }
    }
  }
</script>

<style scoped>
  .title {
    color: blueviolet;
  }
</style>