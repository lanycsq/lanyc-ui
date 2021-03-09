<demo>
  支持readonly
</demo>
<template>
  <div>
    <Input  value="123456"  label="账号" readonly></Input>
  </div>
</template>
<script lang="ts">
import Input from "../../../lib/Input.vue";
export default {
  components: {
    Input,
  },
  setup() {
  },
};
</script>
<style lang="scss">

</style>