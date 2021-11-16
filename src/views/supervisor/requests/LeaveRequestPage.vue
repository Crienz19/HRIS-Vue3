<template>
    <Suspense>
        <template #default>
            <component :is="EmLeave.active_component" />
        </template>

        <template #fallback>
            loading...
        </template>
    </Suspense>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount } from 'vue'
import { useEmployeeLeaveStore } from '@/store/employee/leave';
import LeaveRequestComponent from '@/components/employee/requests/LeaveRequestComponent.vue';
import LeaveCreateRequestComponent from '@/components/employee/requests/LeaveCreateRequestComponent.vue';
import LeaveShowRequestComponent from '@/components/employee/requests/LeaveShowRequestComponent.vue';

export default defineComponent({
    setup() {
        const EmLeave = useEmployeeLeaveStore();
        
        onBeforeMount(async () => {
            await EmLeave.setComponentTo('leave-request-component')
            await EmLeave.loadEmployeeLeaveRequests();
        });

        return {
            EmLeave
        }
    },
    components: {
        LeaveRequestComponent,
        LeaveCreateRequestComponent,
        LeaveShowRequestComponent
    }
})
</script>

