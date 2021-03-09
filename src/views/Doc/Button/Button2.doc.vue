<demo>
支持 size
</demo>
<template>
<div>
  <div>
    <Button size="big">默认按钮</Button>
    <Button>默认按钮</Button>
    <Button size="small">小型按钮</Button>
     <Button size="mini">超小按钮</Button>
  </div>
 
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
