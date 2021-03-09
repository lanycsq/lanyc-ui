### 开始使用
请先[安装](#/doc/install)本组件库。

**完整引入**

在 main.js 中写入以下内容：

```
import Vue from 'vue';
import 'lanyc-ui/package/lib/lanyc-ui.css'
import { createApp } from "vue";
import App from "./App.vue";
import {lanycUI} from 'lanyc-ui'

createApp(App)
.app.use(lanycUI)
.app.mount("#app");

```
**按需引入**

如果你只希望引入部分组件，比如 Button 和 Input，那么需要在 main.js 中写入以下内容：

```
import Vue from 'vue';
import { Button, Input } from 'lanyc-ui';
import App from './App.vue';

createApp(App).
app.mount("#app").
app.component("Button", Button).
app.component("Input", Input)
```

就可以使用我提供的组件了。

**Vue 单文件组件**

代码示例：

```
<template>
  <div>
    <Button>按钮</Button>
  </div>
</template>
<script>
import {Button, Tabs, Switch, Dialog} from "lanyc-ui"
export default {
  components: {Button}
}
</script>
```