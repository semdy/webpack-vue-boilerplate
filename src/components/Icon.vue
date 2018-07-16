<template>
  <span class="svg-icon">
    <svg class="icon-svg" :class="size" :style="fillStyle">
      <use :xlink:href="iconName"/>
    </svg>
  </span>
</template>

<script>
export default {
  props: {
    size: {
      default: '',
      type: String
    },
    color: {
      default: '',
      type: String
    },
    name: {
      type: String,
      require: true
    }
  },
  name: 'Icon',
  computed: {
    fillStyle () {
      return `fill:${this.color}`
    },
    iconName () {
      return `#${this.name}`
    }
  }
}
</script>

<style lang="less">
.svg-icon {
    position: relative;
    display: inline-block;
    vertical-align: middle;
    line-height: 1;
  }

.icon-svg {
  width: 26px;
  height: 26px;
  fill: currentColor;
  vertical-align: top;

  &:not(:root) {
    overflow: hidden;
  }

  &.x-small {
    width: 12px;
    height: 12px;
  }

  &.small {
    width: 16px;
    height: 16px;
  }

  &.large {
    width: 36px;
    height: 36px;
  }

  &.x-large {
    width: 50px;
    height: 50px;
  }
}
</style>
