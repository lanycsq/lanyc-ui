
<template>
  <Demo title="基本用法" description="直接通过设置name为 iconName 来使用即可。例如:" :component="Input1Demo" />
   <Demo title="禁用状态" description="直接通过设置name为 iconName 来使用即可。例如:" :component="Input2Demo" />
    <Demo title="只读状态" description="直接通过设置name为 iconName 来使用即可。例如:" :component="Input3Demo" />
     <Demo title="支持错误提示" description="直接通过设置name为 iconName 来使用即可。例如:" :component="Input4Demo" />
     <Attr :data="inputData"/>
</template>
<script lang="ts">
import Demo from "../../components/Demo.vue";
import Input1Demo from "./Input/Input1.doc.vue";
import Input2Demo from "./Input/Input2.doc.vue";
import Input3Demo from "./Input/Input3.doc.vue";
import Input4Demo from "./Input/Input4.doc.vue";
import Attr from "../../components/Attr.vue"
import inputData from "../../Attrs/inputData"
export default {
  components: {
    Demo,
    Input1Demo,
    Input2Demo,
    Input3Demo,
    Input4Demo,
    Attr
  },
  setup() {
    return {
      Input1Demo,
      Input2Demo,
      Input3Demo,
      Input4Demo,
      inputData
    };
  },
};
</script>