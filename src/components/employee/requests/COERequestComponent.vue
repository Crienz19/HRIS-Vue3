<template>
    <div class="row">
        <div class="col-12">
            <div class="alert alert-primary">
                dfjklsdfjl
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-header">
                    <h3 class="card-title">
                        COE Requests
                    </h3>
                    <div class="card-tools">
                        <button @click="EmCOE.setComponentTo('COECreateRequestComponent')" class="btn btn-primary btn-sm">
                            <i class="fas fa fa-plus mr-1"></i>
                            Create Request
                        </button>
                    </div>
                </div>
                <div class="card-body p-0">
                    <table class="table table-striped table-sm table-hover">
                        <thead>
                            <tr class="text-center">
                                <th class="text-left">Date Requested</th>
                                <th>Date Needed</th>
                                <th>Reason</th>
                                <th>With Compensation</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody v-if="EmCOE.isRequestLoading">
                            <tr class="text-center">
                                <td colspan="10">
                                    <i class="fas fa-spinner fa-pulse fa-2x"></i>
                                </td>
                            </tr>
                        </tbody>
                        <tbody v-else>
                            <tr class="text-center" v-for="(request, key) in requests" :key="request.id">
                                <td class="text-left">{{request.created_at }}</td>
                                <td>{{ request.date_needed }}</td>
                                <td>{{ request.reason }}</td>
                                <td>
                                    <template v-if="request.compensation">
                                        <i class="fas fa fa-check text-success"></i>
                                    </template>
                                    <template v-else>
                                        <i class="fas fa fa-times text-danger"></i>
                                    </template>
                                </td>
                                <td>
                                    <template v-if="request.status == 'Pending'">
                                        <i class="fas fa fa-exclamation text-warning"></i>
                                    </template>
                                    <template v-if="request.status == 'Acknowledged'">
                                        <i class="fas fa fa-check text-success"></i>
                                    </template>
                                </td>
                                <td>
                                    <button @click="editRequest(request.id)" class="btn btn-primary btn-xs mr-1">
                                        <i class="fas fa-search"></i></button>
                                    <button @click="deleteRequest(request.id, key)" class="btn btn-danger btn-xs mr-1">
                                        <i class="fas fa-times"></i></button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { getEmployeeCOERequests } from '@/services/EmployeeDataService'
import { useEmployeeCOEStore } from '@/store/employee/coe';
import { computed, defineComponent } from 'vue'
import * as toastr from 'toastr';

export default defineComponent({
    async setup() {
        const EmCOE = useEmployeeCOEStore();
        const requests = computed(() => EmCOE.getAllRequest)

        const editRequest = async (request_id: number) => {
            await EmCOE.setSelectedRequest(request_id);
            await EmCOE.setComponentTo('COEShowRequestComponent');
        }
        
        const deleteRequest = async (request_id: number, key: number) => {
            await EmCOE.deleteEmployeeCOERequest(request_id, key);
            toastr.success('COE request deleted.');
        }

        return {
            EmCOE,
            requests,
            editRequest,
            deleteRequest
        }
    },
})
</script>
