<template>
  <div class="demo-container">
    <h2>{{ title }}</h2>
    <p>{{ description }}</p>
    <code-per ref="codePer" :component="component"></code-per>
  </div>
</template>

<script lang="ts">
import CodePer from "./CodePer.vue";

export default {
  name: 'demo-doc',
  components: {CodePer},
  props: {
    title: {
      type: String,
      default: '组件功能'
    },
    description: {
      type: String
    },
    component: {
      type: Object
    }
  }
}
</script>

<style lang="scss" scoped>
.demo-container {
  h2 {
    font-weight: 400;
    color: #1f2f3d;
    font-size: 20px;
    margin: 30px 0 20px;
  }

  p {
    font-size: 14px;
    color: #5e6d82;
    line-height: 1.5em;
    margin: 8px 0px 12px 0px;
  }
}
</style>
