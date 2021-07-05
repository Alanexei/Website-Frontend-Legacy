<template>

<div class="project">
  <div class="project__image-container" :style="`background: linear-gradient(135deg, ${data.color}, ${gradientColor});`">
    <img :src="data.icon" :alt="data.name" class="project__image">
  </div>
  <div class="project__content">
    <div class="project__button-container">
      <a v-for="button in data.buttons" :key="button.id" :href="button.url" class="project__button">
        <i :class="button.icon"></i> 
      </a>
    </div>
    <div class="project__name">
      {{ data.name }}
    </div>
    <div class="project__description">
      {{ data.description }} 
    </div>
  </div>
</div>  

</template>

<script lang="ts">

import tinycolor from "tinycolor2";

export default {
  name: 'Project',
  props: {
    data: Object
  },
  computed: {
    gradientColor() {
      return tinycolor(this.data.color).darken(20).toHexString();
    }
  }
}

</script>