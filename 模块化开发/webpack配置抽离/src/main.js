import {add, mul} from "./js/mathUtils.js";

console.log(add(1, 1));
console.log(mul(1, 1));

require("./css/cssStyle.css");
require("./css/lessStyle.less");

import Vue from 'vue';
import cop_01 from "./vue/cop_01.vue";

new Vue({
  el: '#app',
  template: '<cop_01/>',
  components: {
    cop_01
  }
});