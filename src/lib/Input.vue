<template>
  <div class="lanyc-input-wrapper" :class="{ error: error }">
    <template v-if="label">
      <span class="lanyc-label">{{ label }}:</span>
    </template>
    <input id="lanyc-input" :type="type" 
    :value="value || value == '' ? value : modelValue"
    :placeholder="placeholder" 
    :disabled="disabled"
    :readonly="readonly"
    :clearable="clearable"
    @change="input"
    @input="input"
    @focus="inputBlur"
    @blur="blur"
    >
  
    <template v-if="error">
      <icon></icon>
      <span class="errorMessage">{{ error }}</span>
    </template>
    
  </div>
</template>
<script lang="ts">
import { computed, ref } from 'vue';
import Icon from './Icon.vue'
export default {
  props:{
     value: {
      type: String,
      default: "",
    },
    label:{
      type:String,
      default:""
    },
    type:{
      type:String,
      default:"text"
    },
     placeholder:{
      type:String,
      default:'请选择'
    },
    disabled:{
      type:Boolean,
      default: false,
    },
     readonly: {
      type: Boolean,
      default: false,
    }, 
    error: {
      type: String,
    }, 

  },
  components:{},
   setup(props, context) {
    const input = (e: KeyboardEvent) => {
      context.emit("update:value", (e.target as HTMLInputElement).value);
    };
    const blur = (e: FocusEvent) => {
      context.emit("update:modelValue", (e.target as HTMLInputElement).value);
    };
    return {
      input,
      blur,
    };
  },
}
</script>
<style lang="scss">
$height: 32px;
$border-color: #999;
$border-color-hover: #409eff;
;
$red: #f1453d;
.lanyc-input-wrapper{
  >.lanyc-label{
    display: inline-block;
    margin-right: 10px;
  }
  input{
    height: $height;
    border: 1px solid $border-color;
    border-radius: 4px;
    padding: 0 8px;
    outline: none;
    margin: 0.5em 0;
    &:hover {
      border-color: $border-color-hover;
    }
    &:focus {
       border-color: $border-color-hover;
    }
    &[disabled],
    &[readonly] {
      border-color: #ccc;
      color: #b6b6b6;
      cursor: not-allowed;
    }

  }
   &.error {
    > input {
      border-color: $red;
      &:hover {
        border-color: $red;
        &[disabled],
        &[readonly] {
          border-color: #ccc;
        }
      }
    }
    .errorMessage {
      display: inline-block;
      margin-left: 10px;
      color: red;
      font-size: 12px;
    }
  }
}
</style>