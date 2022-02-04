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
import COERequestComponent from '@/components/employee/requests/COERequestComponent.vue';
import COECreateRequestComponent from '@/components/employee/requests/COECreateRequestComponent.vue';
import COEShowRequestComponent from '@/components/employee/requests/COEShowRequestComponent.vue';
import { useEmployeeCOEStore } from '@/store/employee/coe';
import { defineComponent, onBeforeMount } from 'vue'
import { storeToRefs } from 'pinia';

export default defineComponent({
    setup() {
        const EmpCoeStore = useEmployeeCOEStore();
        const { 
            getActiveComponent
        } = storeToRefs(EmpCoeStore);

        onBeforeMount(async () => {
            await EmpCoeStore.setComponentTo('COERequestComponent');
            await EmpCoeStore.loadEmployeeCOERequest();
        })

        return {
            getActiveComponent
        }
    },
    components: {
        COERequestComponent,
        COECreateRequestComponent,
        COEShowRequestComponent
    }
})
</script>
