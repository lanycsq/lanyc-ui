<demo>
常规使用
</demo>
<template>
<Tabs v-model:selected="selected">
  <Tab title="吃饭">吃饭</Tab>
  <Tab title="睡觉">睡觉</Tab>
  <Tab title="打游戏">打游戏</Tab>
</Tabs>
</template>

<script lang="ts">
import Tabs from '../../../lib/Tabs.vue'
import Tab from '../../../lib/Tab.vue'
import {
  ref
} from 'vue'
export default {
  components: {
    Tabs,
    Tab
  },
  setup() {
    //指定初始化选择的tab
    const selected = ref('打游戏')
    return {
      selected
    }
  }
}
</script>
