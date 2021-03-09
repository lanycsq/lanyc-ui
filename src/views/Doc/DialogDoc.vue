<template>
<h2>Dialog 示例</h2>
<Demo title="基本用法" description="弹出一个对话框。" :component="Dialog1Demo" />
<Demo title="函数式调用" description="隐藏dom结构，只暴露出调用的api。" :component="Dialog2Demo" />
<Attr :data="dialogData"/>
</template>

<script lang="ts">
import Demo from '../../components/Demo.vue';
import Dialog1Demo from './Dialog/Dialog1.doc.vue';
import Dialog2Demo from './Dialog/Dialog2.doc.vue';
import Attr from '../../components/Attr.vue'
import dialogData from "../../Attrs/dialogData"

export default {
  components: {
    Demo,Attr
  },
  setup() {

    return {
      Dialog1Demo,
      Dialog2Demo,
      dialogData
    }
  }
}
</script>