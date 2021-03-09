<template>
<h1>Tabs 示例</h1>
<Demo title="基本用法" :component="Tabs1Demo" />
<Attr :data="tabData"/>
</template>

<script lang="ts">
import Demo from '../../components/Demo.vue'
import Tabs1Demo from './Tab/Tabs1.doc.vue'
import Attr from '../../components/Attr.vue'
import tabData from '../../Attrs/tabData'
export default {
  components: {
    Demo,Attr
  },
  setup() {
    return {
      Tabs1Demo,
      tabData
    }
  }
}
</script>
