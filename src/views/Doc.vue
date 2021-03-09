<template>
<div class="layout">
  <Topnav toggleMenuButtonVisible class="nav" />
  <div class="content">
    <aside v-if="menuVisible">
      <h2>文档</h2>
      <ol>
        <li>
          <router-link to="/doc/intro">介绍</router-link>
        </li>
        <li>
          <router-link to="/doc/install">安装</router-link>
        </li>
        <li>
          <router-link to="/doc/get-started">开始使用</router-link>
        </li>
      </ol>
      <h2>组件列表</h2>
      <ol>
        <li>
          <router-link to="/doc/switch">Switch 组件</router-link>
        </li>
        <li>
          <router-link to="/doc/button">Button 组件</router-link>
        </li>
        <li>
          <router-link to="/doc/dialog">Dialog 组件</router-link>
        </li>
        <li>
          <router-link to="/doc/tabs">Tabs 组件</router-link>
        </li>
         <li>
          <router-link to="/doc/input">Input 组件</router-link>
        </li>
         <li>
          <router-link to="/doc/icon">Icon 组件</router-link>
        </li>
      </ol>
    </aside>
    <main>
      <router-view />
    </main>
  </div>
</div>
</template>
<script lang="ts">
import Topnav from "../components/Topnav.vue";
import {
  inject,
  Ref
} from "vue";
export default {
  components: {
    Topnav
  },
  setup() {
    const menuVisible = inject < Ref < boolean >> ("menuVisible"); // get
    return {
      menuVisible
    };
  },
};
</script>
<style lang="scss" scoped>
$aside-index : 10;

.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  > .nav {
    flex-shrink: 0;
  }
  > .content {
    flex-grow: 1;
    padding-top: 60px;
    padding-left: 206px;
    @media (max-width: 500px) {
      padding-left: 0; 
    }
  }
}
.content {
  display: flex;
  > aside {
    flex-shrink: 0;
  }
  > main {
    flex-grow: 1;
    padding: 16px;
    background: white;
  }
}
aside {
  background: #ffeded;
  width: 200px;
  padding: 16px 0;
  position: fixed;
  top: 0;
  left: 0;
  padding-top: 70px;
  height: 100%;
  z-index: $aside-index;
  >h2 {
    margin: 4px 0;
    padding: 4px 16px;
    font-size:16px;
    font-weight: 700;
  }
  > ol {
    > li {
      >a{
        display: block;
        padding: 10px 16px;
        text-decoration: none;
        font-size:14px;
        padding-left:28px;
        color: #333;
      }
      .router-link-active{
        background: white;
        color:#f5ac88;
      }
    }
  }
}
main {
  overflow: auto;
}
</style>