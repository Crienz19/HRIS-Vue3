<template>
    <div class="login-box">
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
            body.classList.add('login-page', 'dark-mode');
        })
    },
})
</script>
