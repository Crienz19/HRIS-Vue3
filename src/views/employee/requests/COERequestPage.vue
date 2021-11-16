<template>
    <Suspense>
        <template #default>
            <component :is="EmCOE.active_component" />
        </template>
        <template #fallback>
            Loading...
        </template>
    </Suspense>
</template>

<script lang="ts">
import COERequestComponent from '@/components/employee/requests/COERequestComponent.vue';
import COECreateRequestComponent from '@/components/employee/requests/COECreateRequestComponent.vue';
import COEShowRequestComponent from '@/components/employee/requests/COEShowRequestComponent.vue';
import { useEmployeeCOEStore } from '@/store/employee/coe';
import { defineComponent, onBeforeMount } from 'vue'

export default defineComponent({
    setup() {
        const EmCOE = useEmployeeCOEStore();

        onBeforeMount(async () => {
            await EmCOE.setComponentTo('COERequestComponent');
            await EmCOE.loadEmployeeCOERequest();
        })

        return {
            EmCOE
        }
    },
    components: {
        COERequestComponent,
        COECreateRequestComponent,
        COEShowRequestComponent
    }
})
</script>
