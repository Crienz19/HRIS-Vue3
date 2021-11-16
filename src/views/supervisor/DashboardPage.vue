<template>
    <div class="row">
        Something here
    </div>
    <div class="row">
        <div class="col-3">
            <div class="card">
                <div class="card-body d-flex justify-content-center">
                    <img :src="user.profile_image" alt="profile_picture" style="height: 200px">
                </div>
            </div>
        </div>
        <div class="col-9">
            <Suspense>
                <template #default>
                    <personal-details-component />
                </template>

                <template #fallback>
                    loading..
                </template>
            </Suspense>

            <Suspense>
                <template #default>
                    <leave-credit-details-component />
                </template> 

                <template #fallback>
                    loading...
                </template>
            </Suspense>
        </div>
    </div>
</template>

<script lang="ts">
import { computed, defineComponent, onBeforeMount } from 'vue'
import PersonalDetailsComponent from '@/components/employee/dashboard/PersonalDetailsComponent.vue';
import LeaveCreditDetailsComponent from '@/components/employee/dashboard/LeaveCreditDetailsComponent.vue';
import { usePersonalStore } from '@/store/employee/personal';
import { useAuthStore } from '@/store/auth';

export default defineComponent({
    setup() {
        const auth = useAuthStore();
        const personal = usePersonalStore();

        const user = computed(() => auth.getAuthenticatedUser)

        onBeforeMount(async () => {
            await personal.loadPersonalDetails();
        })


        return {
            user
        }
    },
    components: {
        PersonalDetailsComponent,
        LeaveCreditDetailsComponent
    }
})
</script>
