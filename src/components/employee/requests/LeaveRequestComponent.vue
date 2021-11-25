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
                        Leave Requests
                    </h3>
                    <div class="card-tools">
                        <button @click="createLeaveRequest()" class="btn btn-primary btn-sm">
                            <i class="fas fa fa-plus mr-2"></i>
                            Create Request</button>
                    </div>
                </div>
                <div class="card-body p-0">
                    <table class="table table-striped table-sm table-hover">
                        <thead>
                            <tr class="text-center">
                                <th class="text-left">Type</th>
                                <th>Pay</th>
                                <th>From</th>
                                <th>To</th>
                                <th>Time From</th>
                                <th>Time To</th>
                                <th>Reason</th>
                                <th>Recommending Approval</th>
                                <th>Final Approval</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody v-if="EmLeave.isRequestLoading">
                            <tr class="text-center">
                                <td colspan="10">
                                    <i class="fas fa-spinner fa-pulse fa-2x"></i>
                                </td>
                            </tr>
                        </tbody>
                        <tbody v-else>
                            <tr class="text-center" v-for="(request, key) in requests" :key="request.id">
                                <td class="text-left">{{ request.type }}</td>
                                <td class="text-bold">{{ request.pay_type }}</td>
                                <td>{{ request.from }}</td>
                                <td>{{ request.to }}</td>
                                <td>{{ request.time_from }}</td>
                                <td>{{ request.time_to }}</td>
                                <td>{{ request.reason }}</td>
                                <td class="text-center">
                                    <template v-if="request.recommending_approval == 'Pending'">
                                        <i class="fas fa-exclamation text-warning"></i>
                                    </template>

                                    <template v-else-if="request.recommending_approval == 'Approved'">
                                        <i class="fas fa-check text-success"></i>
                                    </template>

                                    <template v-else-if="request.recommending_approval == 'Disapproved'">
                                        <i class="fas fa-times text-danger"></i>
                                    </template>
                                </td>
                                <td class="text-center">
                                    <template v-if="request.final_approval == 'Pending'">
                                        <i class="fas fa-exclamation text-warning"></i>
                                    </template>

                                    <template v-else-if="request.final_approval == 'Approved'">
                                        <i class="fas fa-check text-success"></i>
                                    </template>

                                    <template v-else-if="request.final_approval == 'Disapproved'">
                                        <i class="fas fa-times text-danger"></i>
                                    </template>
                                </td>
                                <td>
                                    <template v-if="request.final_approval == 'Pending'">
                                        <button @click="editLeaveRequest(request.id)" class="btn btn-primary btn-xs mr-1">
                                            <i class="fas fa-search"></i>
                                        </button>
                                        <button @click="deleteRequest(request.id, key)" class="btn btn-danger btn-xs mr-1">
                                            <i class="fas fa-times"></i>
                                        </button>
                                    </template>
                                    <template>
                                        <p>Not Applicable</p>
                                    </template>
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
import { computed, ComputedRef, defineComponent } from 'vue'
import { EmployeeLeaveTypes, useEmployeeLeaveStore } from '@/store/employee/leave';
import * as toastr from 'toastr';

export default defineComponent({
    async setup() {
        const EmLeave = useEmployeeLeaveStore();
        const requests = computed(() => EmLeave.getAllRequests);

        const createLeaveRequest = async () => {
            await EmLeave.setComponentTo('leave-create-request-component');
        }

        const editLeaveRequest = async (request_id: number) => {
            await EmLeave.setSelectedRequest(request_id);
            await EmLeave.setComponentTo('leave-show-request-component');
        }

        const deleteRequest = async (id: number, key: number) => {
            const conf = confirm('Delete this record?');
            if (conf)
            await EmLeave.deleteEmployeeLeaveRequest(id, key);
            toastr.info('Selected request deleted');
        }
        return {
            EmLeave,
            requests,
            createLeaveRequest,
            editLeaveRequest,
            deleteRequest
        }
    }
})
</script>