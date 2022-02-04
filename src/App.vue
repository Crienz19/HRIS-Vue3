<template>
  <component :is="route.meta.layout">
    <router-view/>
  </component>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import { useRoute } from 'vue-router'

export default defineComponent({
  setup() {
    const route = useRoute();
    
    return {
      route
    }
  },
})
</script>

<style lang="sass">
$fa-font-path: "~@fortawesome/fontawesome-free/webfonts";
@import "~@fortawesome/fontawesome-free/scss/fontawesome.scss";
@import "~@fortawesome/fontawesome-free/scss/solid.scss";
@import "~@fortawesome/fontawesome-free/scss/brands.scss";
@import "~@fortawesome/fontawesome-free/scss/regular.scss";
</style>