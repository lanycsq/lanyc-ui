<demo>
  错误信息提示
</demo>
<template>
  <div>
    <Input value="error" :error="errorMessage"></Input>
  </div>
</template>
<script lang="ts">
import { ref } from "vue";
import Input from "../../../lib/Input.vue";
export default {
  components: {
    Input,
  },
  setup() {
   const errorMessage = ref('输入内容不允许含有字母');
   return {
     errorMessage
   }
  },
};
</script>
<style lang="scss">

</style>