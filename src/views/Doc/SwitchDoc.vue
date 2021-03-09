<template>
<div>
  <h1>Switch 开关组件 </h1>
  <p>表示两种相互对立的状态间的切换，多用于触发「开/关」</p>
  <Demo title="基本用法" description="最简单的用法" :component="Switch1Demo" />
  <Demo title="禁用状态" :component="Switch2Demo" />
  <Attr  :data="switchData"></Attr>
</div>
</template>

<script lang="ts">
import Switch1Demo from './Switch/Switch1.doc.vue'
import Switch2Demo from './Switch/Switch2.doc.vue'
import Demo from '../../components/Demo.vue'
import Attr from '../../components/Attr.vue'
import switchData from '../../Attrs/switchData'
export default {
  components: {
    Demo,Attr
  },
  setup() {
    return {
      Switch1Demo,
      Switch2Demo,
      switchData
    }
  }
}
</script>

<style lang="scss" scoped>
$border-color: #d9d9d9;

.demo {
  border: 1px solid $border-color;
  margin: 16px 0 32px;

  >h2 {
    font-size: 20px;
    padding: 8px 16px;
    border-bottom: 1px solid $border-color;
  }

  &-component {
    padding: 16px;
  }

  &-actions {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
  }

  &-code {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;

    >pre {
      line-height: 1.1;
      font-family: Consolas, 'Courier New', Courier, monospace;
      margin: 0;
    }
  }
}
</style>
