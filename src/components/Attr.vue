<template>
  <div class="lanyc-attr">
    <h2>Attributes</h2>
    <table class="lanyc-attr-table">
      <thead>
      <tr>
        <th class="lanyc-attr-title" v-for="(item,index) in columns" :key="index">{{ item.title }}</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(item,index) in data" :key="index">
        <td class="lanyc-attr-title td" v-for="value in item" :key="value">{{ value }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import columns from "../Attrs/columns"
export default {
  props: {
    data: {
      type: Object
    }
  },
  setup(){
    return {
      columns
    }
  }
 
}
</script>

<style lang="scss" scoped>
.lanyc-attr {
  width: 100%;
  overflow-x: auto;
  h2 {
    font-weight: 400;
    color: #1f2f3d;
    font-size: 22px;
    margin: 55px 0 20px;
  }

  &-table {
    width: 100%;
    border-collapse: collapse;
    background-color: #fff;
    font-size: 14px;
    margin-bottom: 45px;
    line-height: 1.5em;
  }

  &-title {
    text-align: left;
    white-space: nowrap;
    color: #909399;
    font-weight: 400;
    border-bottom: 1px solid #dcdfe6;
    padding: 15px;
    max-width: 250px;
  }
  .td {
    color: #606266;
  }
}
</style>