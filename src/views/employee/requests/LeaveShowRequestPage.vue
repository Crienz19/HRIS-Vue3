<template>
    <Suspense>
        <template #default>
            <leave-show-request-component />
        </template>
        <template #fallback>
            Loading...
        </template>
    </Suspense>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import LeaveShowRequestComponent from '@/components/employee/requests/LeaveShowRequestComponent.vue';

export default defineComponent({
    setup() {
        const route = useRoute();

        return {
            route
        }
    },
    components: {
        LeaveShowRequestComponent
    }
})
</script>
