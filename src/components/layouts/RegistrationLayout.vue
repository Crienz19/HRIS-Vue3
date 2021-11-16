<template>
    <div class="d-flex vh-100 justify-content-center align-items-center">
        <slot />
    </div>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount } from 'vue'

export default defineComponent({
    setup() {
        onBeforeMount(() => {
            let body = document.body;
            body.className = '';
            body.classList.add('dark-mode');
        })
    },
})
</script>
