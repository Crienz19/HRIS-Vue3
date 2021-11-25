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
                        Overtime Requests
                    </h3>
                    <div class="card-tools">
                        <button @click="EmOvertime.setComponentTo('overtime-create-request-component')" class="btn btn-primary btn-sm">
                            <i class="fas fa fa-plus mr-1"></i>
                            Create Request</button>
                    </div>
                </div>
                <div class="card-body p-0">
                    <table class="table table-striped table-sm table-hover">
                        <thead>
                            <tr class="text-center">
                                <th class="text-left">Date</th>
                                <th>From</th>
                                <th>To</th>
                                <th>Reason</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody v-if="EmOvertime.isRequestLoading">
                            <tr class="text-center">
                                <td colspan="10">
                                    <i class="fas fa-spinner fa-pulse fa-2x"></i>
                                </td>
                            </tr>
                        </tbody>
                        <tbody v-else>
                            <tr class="text-center" v-for="(request, key) in requests" :key="request.id">
                                <td class="text-left">{{ request.date }}</td>
                                <td>{{ request.from.standard }}</td>
                                <td>{{ request.to.standard }}</td>
                                <td>{{ request.reason }}</td>
                                <td>
                                    <template v-if="request.status == 'Pending'">
                                        <i class="fas fa fa-exclamation text-warning"></i>
                                    </template>
                                    <template v-if="request.status == 'Approved'">
                                        <i class="fas fa fa-check text-success"></i>
                                    </template>
                                    <template v-if="request.status == 'Disapproved'">
                                        <i class="fas fa fa-times text-danger"></i>
                                    </template>
                                </td>
                                <td>
                                    <template v-if="request.status == 'Pending'">
                                        <button @click="editRequest(request.id)" class="btn btn-primary btn-xs mr-1">
                                            <i class="fas fa-search"></i></button>
                                        <button @click="deleteRequest(request.id, key)" class="btn btn-danger btn-xs mr-1">
                                            <i class="fas fa-times"></i></button>
                                    </template>
                                    <template v-else>
                                        <p>Not applicable</p>
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
import { useEmployeeOvertimeStore } from '@/store/employee/overtime'
import { computed, defineComponent } from 'vue'
import * as toastr from 'toastr';

export default defineComponent({
    async setup() {
        const EmOvertime = useEmployeeOvertimeStore();

        const requests = computed(() => EmOvertime.getAllRequests)

        const editRequest = async (id: number) => {
            EmOvertime.setSelectedRequest(id);
            EmOvertime.setComponentTo('overtime-show-request-component');
        }

        const deleteRequest = async (id: number, key: number) => {
            const conf = confirm('Delete this request?')
            if(conf)
            await EmOvertime.deleteEmployeeOvertimeRequest(id, key);
            toastr.success('Overtime request deleted.');
        }

        return {
            EmOvertime,
            requests,
            editRequest,
            deleteRequest
        }
    },
})
</script>
