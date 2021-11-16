<template>
    <div class="card">
        <div class="card-header">
            <h5>Leave Credits</h5>
        </div>
        <div class="card-body p-0">
            <table class="table table-sm table-striped">
                <tbody>
                    <tr>
                        <td style="width: 50%;">Vacation Leave (VL)</td>
                        <td>
                            <div class="progress progress-xs">
                                <div class="progress-bar bg-warning" :style="`width: ${ (credits.VL / credits.total_VL ) * 100 }%;`"></div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>Sick Leave (SL)</td>
                        <td>
                            <div class="progress progress-xs">
                                <div class="progress-bar bg-warning" :style="`width: ${ (credits.SL / credits.total_SL ) * 100 }%;`"></div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>Personal Time Off (PTO)</td>
                        <td>
                            <div class="progress progress-xs">
                                <div class="progress-bar bg-warning" :style="`width: ${ (credits.PTO / credits.total_PTO ) * 100 }%;`"></div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>Special Leave</td>
                        <td>
                            <div class="progress progress-xs">
                                <div class="progress-bar bg-warning" style="width: 20%"></div>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script lang="ts">
import { CreditTypes, getEmployeeLeaveCredits } from '@/services/EmployeeDataService'
import { defineComponent } from 'vue'

export default defineComponent({
    async setup() {
        const credits: CreditTypes = await getEmployeeLeaveCredits();

        return {
            credits
        }
    },
})
</script>
