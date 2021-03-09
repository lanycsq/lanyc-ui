<demo>
基本用法
</demo>
<template>
 <div>
    <Button>默认按钮</Button>
    <Button level="main">主要按钮</Button>
    <Button level="success">成功按钮</Button>
    <Button level="danger">危险按钮</Button>
  </div>
 
</template>

<script lang="ts">
import Button from "../../../lib/Button.vue";
export default {
  components: {
    Button
  }
}
</script>
<style lang="scss" scoped>
  div{
    margin-top: 10px;
  }
</style>
