<template>
    <Suspense>
        <template #default>              
            <component :is="EmTrip.active_component"></component>
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

export default defineComponent({
    setup() {
        const EmTrip = useEmployeeTripStore();  

        onBeforeMount(async () => {
            await EmTrip.setComponentTo('trip-request-component');
            await EmTrip.loadEmployeeTripRequests();
        });

        return {
            EmTrip
        }
    },
    components: {
        TripRequestComponent,
        TripCreateRequestComponent,
        TripShowRequestComponent
    }
})
</script>
