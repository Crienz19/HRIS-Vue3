<template>
    <Suspense>
        <template #default>              
            <component :is="getActiveComponent"></component>
        </template>
        <template #fallback>              
            Loading...
        </template>
    </Suspense>
</template>

<script lang="ts">
import TripRequestComponent from '@/components/employee/requests/TripRequestComponent.vue';
import TripCreateRequestComponent from '@/components/employee/requests/TripCreateRequestComponent.vue';
import TripShowRequestComponent from '@/components/employee/requests/TripShowRequestComponent.vue';
import { useEmployeeTripStore } from '@/store/employee/trip';
import { defineComponent, onBeforeMount } from 'vue'
import { storeToRefs } from 'pinia';

export default defineComponent({
    setup() {
        const EmpTripStore = useEmployeeTripStore();  
        const { 
            getActiveComponent 
        } = storeToRefs(EmpTripStore);

        onBeforeMount(async () => {
            await EmpTripStore.setComponentTo('trip-request-component');
            await EmpTripStore.loadEmployeeTripRequests();
        });

        return {
            getActiveComponent
        }
    },
    components: {
        TripRequestComponent,
        TripCreateRequestComponent,
        TripShowRequestComponent
    }
})
</script>
