<template>
    <Suspense>
        <template #default>
            <component :is="EmOvertime.active_component" />
        </template>
        <template #fallback>
            Loading...
        </template>
    </Suspense>
</template>

<script lang="ts">
import OvertimeRequestComponent from '@/components/employee/requests/OvertimeRequestComponent.vue';
import OvertimeCreateRequestComponent from '@/components/employee/requests/OvertimeCreateRequestComponent.vue';
import OvertimeShowRequestComponent from '@/components/employee/requests/OvertimeShowRequestComponent.vue';
import { useEmployeeOvertimeStore } from '@/store/employee/overtime';
import { defineComponent, onBeforeMount } from 'vue'

export default defineComponent({
    setup() {
        const EmOvertime = useEmployeeOvertimeStore();

        onBeforeMount(async () => {
            await EmOvertime.setComponentTo('overtime-request-component');
            await EmOvertime.loadEmployeeOvertimeRequests();
        });

        return {
            EmOvertime
        }
    },
    components: {
        OvertimeRequestComponent,
        OvertimeCreateRequestComponent,
        OvertimeShowRequestComponent
    }
})
</script>
