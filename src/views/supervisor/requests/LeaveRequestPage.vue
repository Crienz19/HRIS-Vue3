<template>
    <Suspense>
        <template #default>
            <component :is="getActiveComponent" />
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
import { storeToRefs } from 'pinia';

export default defineComponent({
    setup() {
        const EmpLeaveStore = useEmployeeLeaveStore();
        const {
            getActiveComponent 
        } = storeToRefs(EmpLeaveStore);

        onBeforeMount(async () => {
            await EmpLeaveStore.setComponentTo('leave-request-component')
            await EmpLeaveStore.loadEmployeeLeaveRequests();
        });

        return {
            getActiveComponent
        }
    },
    components: {
        LeaveRequestComponent,
        LeaveCreateRequestComponent,
        LeaveShowRequestComponent
    }
})
</script>

