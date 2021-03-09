<template>
<div>
  <h1>Icon 图标</h1>
  <p>提供了一套常用的图标集合。</p>
  <Demo title="基本用法" description="直接通过设置name为 iconName 来使用即可。例如:" :component="Svg1Demo" />
  <Svg2Demo/>
 
</div>
</template>

<script lang="ts">
import Demo from "../../components/Demo.vue";
import Svg1Demo from "./Icon/Icon1.doc.vue";
import Svg2Demo from "./Icon/Icon2.doc.vue";

export default {
  components: {
    Demo,
    Svg2Demo
  },
  setup() {
    return {
      Svg1Demo,
    };
  },
};
</script>
