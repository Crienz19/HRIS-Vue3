<template>
    <Suspense>
        <template #default>
            <component :is="getActiveComponent" />
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
import { storeToRefs } from 'pinia';

export default defineComponent({
    setup() {
        const EmpOvertimeStore = useEmployeeOvertimeStore();
        const { 
            getActiveComponent 
        } = storeToRefs(EmpOvertimeStore);

        onBeforeMount(async () => {
            await EmpOvertimeStore.setComponentTo('overtime-request-component');
            await EmpOvertimeStore.loadEmployeeOvertimeRequests();
        });

        return {
            getActiveComponent
        }
    },
    components: {
        OvertimeRequestComponent,
        OvertimeCreateRequestComponent,
        OvertimeShowRequestComponent
    }
})
</script>
