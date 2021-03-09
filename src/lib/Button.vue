<template>
  <button class="lanyc-button" :class="classes" :disabled="disabled">
    <span v-if="loading" class="lanyc-loadingIndicator"></span>
    <slot />
  </button>
</template>
<script lang="ts">
import { computed, ref } from "vue";
export default {
  props: {
    theme: {
      type: String,
      default: "button",
    },
    size: {
      type: String,
      default: "normal",
    },
    level: {
      type: String,
      default: "normal",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const iconVisible=ref(false)
    const { theme, size, level } = props;
    const classes = computed(() => {
      return {
        [`lanyc-theme-${theme}`]: theme,
        [`lanyc-size-${size}`]: size,
        [`lanyc-level-${level}`]: level,
      };
    });
    return { classes };
  },
};
</script>
<style lang="scss">
$h: 32px;
$border-color: #d9d9d9;
$color: #333;
$blue: #40a9ff;
$radius: 4px;
$red: red;
$grey: grey;
$success:#5bb42f;
.lanyc-button {
  font-size: 14px;
  box-sizing: border-box;
  height: $h;
  padding: 0 12px;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  background: white;
  color: $color;
  border: 1px solid $border-color;
  border-radius: $radius;
  box-shadow: 0 1px 0 fade-out(black, 0.95);
  transition: background 250ms;
  & + & {
    margin-left: 8px;
  }
  &:hover,
  &:focus {
    color: $blue;
    border-color: $blue;
  }
  &:focus {
    outline: none;
  }
  &::-moz-focus-inner {
    border: 0;
  }
  &.lanyc-theme-link {
    border-color: transparent;
    box-shadow: none;
    color: $blue;
    &:hover,
    &:focus {
      color: lighten($blue, 10%);
    }
  }
  &.lanyc-theme-text {
    border-color: transparent;
    box-shadow: none;
    color: inherit;
    &:hover,
    &:focus {
      background: darken(white, 5%);
    }
  }
  &.lanyc-size-big {
    font-size: 18px;
    height: 40px;
    padding: 0 14px;
  }
  &.lanyc-size-small {
    font-size: 12px;
    height: 24px;
    padding: 2px 6px;
  }
  &.lanyc-size-mini {
    font-size: 12px;
    height: 22px;
    padding: 2px 6px;
  }
  &.lanyc-theme-button {
    &.lanyc-level-main {
      background: $blue;
      color: white;
      border-color: $blue;
      &:hover,
      &:focus {
        background: darken($blue, 10%);
        border-color: darken($blue, 10%);
      }
    }
    &.lanyc-level-danger {
      background: $red;
      border-color: $red;
      color: white;
      &:hover,
      &:focus {
        background: darken($red, 10%);
        border-color: darken($red, 10%);
      }
    }
    &.lanyc-level-success {
      background: $success;
      border-color: $success;
      color: white;
      &:hover,
      &:focus {
        background: darken($success, 10%);
        border-color: darken($success, 10%);
      }
    }
  }
  &.lanyc-theme-link {
    &.lanyc-level-success {
      color: $success;
      &:hover,
      &:focus {
        color: darken($success, 10%);
      }
    }
    &.lanyc-level-danger {
      color: $red;
      &:hover,
      &:focus {
        color: darken($red, 10%);
      }
    }
  }
  &.lanyc-theme-text {
    &.lanyc-level-main {
      color: $blue;
      &:hover,
      &:focus {
        color: darken($blue, 10%);
      }
    }
    &.lanyc-level-success {
      color: $success;
      &:hover,
      &:focus {
        color: darken($success, 10%);
      }
    }
    &.lanyc-level-danger {
      color: $red;
      &:hover,
      &:focus {
        color: darken($red, 10%);
      }
    }
  }
  &.lanyc-theme-button {
    &[disabled] {
      cursor: not-allowed;
      color: $grey;
      &:hover {
        border-color: $grey;
      }
    }
  }
  &.lanyc-theme-link, &.lanyc-theme-text {
    &[disabled] {
      cursor: not-allowed;
      color: $grey;
    }
  }
  > .lanyc-loadingIndicator{
    width: 14px;
    height: 14px;
    display: inline-block;
    margin-right: 4px;
    border-radius: 8px; 
    border-color: $blue $blue $blue transparent;
    border-style: solid;
    border-width: 2px;
    animation: lanyc-spin 1s infinite linear;
  }
}
@keyframes lanyc-spin {
  0%{transform: rotate(0deg)} 
  100%{transform: rotate(360deg)} 
}
</style>