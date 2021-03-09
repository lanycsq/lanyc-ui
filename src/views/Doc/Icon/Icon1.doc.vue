<demo>
常规用法
</demo>
<template>
  <div class="lanyc-icon-use">
    <ul>
      <li> <Icon name="lanyc-home"></Icon></li>
      <li> <Icon name="lanyc-add"></Icon></li>
      <li> <Icon name="lanyc-browse"></Icon></li>
    </ul>
  </div>
</template>

<script lang="ts">
import Icon from "../../../lib/Icon.vue";
export default {
  components: {
    Icon
  }
}
</script>
<style lang="scss"  >
.lanyc-icon-use{
  ul{
    display: flex;
    >li{
    margin-right: 20px;
    }
  }
}


</style>

