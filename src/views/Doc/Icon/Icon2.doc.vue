<template>
<div class="lanyc-icon">
  <div class="lanyc-icon-title">图标集合</div>
  <div class="lanyc-icon-list">
    <ul >
      <li v-for="icon in icons" :key="icon">
        <div>
          <Icon :name="icon"/>
        </div>
        <div>
          {{icon}}
        </div>
      </li>
    </ul>
  </div>
</div>
</template>

<script lang="ts">
import Icon from "../../../lib/Icon.vue";
import icons from "./iconStore"
export default {
  components: {
    Icon
  },
  setup(){
    return{
      icons
    }
  }
}
</script>
<style lang="scss" >
$blue:#1890ff;
 $border:1px solid  #f0f0f0;
.lanyc-icon{
    margin-top: 40px;
    &-title{
    font-weight: 400;
    color: #1f2f3d;
    font-size: 20px;
    }
    &-list{
      >ul {
          margin: 16px 0;
          display: grid;
          justify-content: center;
          align-content: center;
          grid-template-columns:  repeat(7, 1fr);
         
          >li{
            padding :20px ;
            text-align: center;
            border-bottom:$border;
            border-top:$border;
            border-left:$border;
            height: 120px;
            &:hover{
              color: $blue;
            }
            &:nth-child(7n){
              border-right:$border ;
            }
          }
         
      }
     
    }
}
  
</style>

