<template>
    <div class="card">
        <div v-if="personal.isRequestLoading" class="overlay">
            <i class="fas fa-spinner fa-pulse fa-2x"></i>
        </div>
        <div class="card-header">
            <h5>Leave Credits</h5>
        </div>
        <div class="card-body p-0">
            <table class="table table-sm table-striped">
                <tbody>
                    <tr>
                        <td style="width: 50%;">Vacation Leave (VL)</td>
                        <td>
                            <div class="progress progress">
                                <div class="progress-bar bg-warning" :style="`width: ${ (employee.credits?.VL / employee.credits?.total_VL ) * 100 }%;`">{{ employee.credits?.VL }} / {{ employee.credits?.total_VL }}</div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>Sick Leave (SL)</td>
                        <td>
                            <div class="progress progress">
                                <div class="progress-bar bg-warning" :style="`width: ${ (employee.credits?.SL / employee.credits?.total_SL ) * 100 }%;`">{{ employee.credits?.SL }} / {{ employee.credits?.total_SL }}</div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>Personal Time Off (PTO)</td>
                        <td>
                            <div class="progress progress">
                                <div class="progress-bar bg-warning" :style="`width: `">{{ employee.credits?.PTO }} / {{ employee.credits?.total_PTO }}</div>
                            </div>
                        </td>
                    </tr>
                    <tr v-if="employee.credits?.special_leave > 0">
                        <td>Special Leave</td>
                        <td>
                            <div class="progress progress">
                                <div class="progress-bar bg-warning" :style="`width: ${ (employee.credits?.special_leave / employee.credits?.total_special_leave ) * 100 }%;`">{{ employee.credits?.special_leave }} / {{ employee.credits?.total_special_leave }}</div>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script lang="ts">
import { usePersonalStore } from '@/store/employee/personal'
import { computed, defineComponent } from 'vue'

export default defineComponent({
    async setup() {
        const personal = usePersonalStore();

        const employee = computed(() => personal.getAllPersonalDetails);

        return {
            employee,
            personal
        }
    },
})
</script>
