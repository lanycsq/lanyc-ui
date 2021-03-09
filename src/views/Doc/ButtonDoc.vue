<template>
<div>
  <h2>Button按钮</h2>
  <p>常用的操作按钮。</p>
  <Demo title="基本用法" description="基础的按钮用法。" :component="Button1Demo"/>
  <Demo title="支持 size" description="Button 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸。" :component="Button2Demo"/>
  <Demo title=" 支持 level" description="根据按钮字体颜色不同，展示不同的状态。" :component="Button3Demo" />
  <Demo title="禁用状态" description="按钮不可用状态。" :component="Button4Demo"/>
  <Demo title="文字按钮" description="按钮不可用状态。" :component="Button6Demo" />
  <Demo title="加载中" description="点击按钮后进行数据加载操作，在按钮上显示加载状态。" :component="Button5Demo" />
  <Attr  :data="btnData"></Attr>
</div>
</template>

<script lang="ts">
import Demo from "../../components/Demo.vue";
import Button1Demo from "./Button/Button1.doc.vue";
import Button2Demo from "./Button/Button2.doc.vue";
import Button3Demo from "./Button/Button3.doc.vue";
import Button4Demo from "./Button/Button4.doc.vue";
import Button5Demo from "./Button/Button5.doc.vue";
import Button6Demo from "./Button/Button6.doc.vue";
import Attr from "../../components/Attr.vue"
import btnData from "../../Attrs/btnData"
export default {
  components: {
    Demo,Attr
  },
  setup() {
    return {
      Button1Demo,
      Button2Demo,
      Button3Demo,
      Button4Demo,
      Button5Demo,
       Button6Demo,
       btnData
    };
  },
};
</script>
<style lang="scss" >

</style>
