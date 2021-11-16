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
                        Business Trip Requests
                    </h3>
                    <div class="card-tools">
                        <button @click="EmTrip.setComponentTo('trip-create-request-component')" class="btn btn-primary btn-sm">
                            <i class="fas fa fa-plus mr-1"></i>
                            Create Request
                        </button>
                    </div>
                </div>
                <div class="card-body p-0">
                    <table class="table table-striped table-sm table-hover">
                        <thead>
                            <tr class="text-center">
                                <th class="text-left">Date From</th>
                                <th>Date To</th>
                                <th>Time In</th>
                                <th>Time Out</th>
                                <th>Dest. From</th>
                                <th>Dest. To</th>
                                <th>Purpose</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody v-if="EmTrip.isRequestLoading">
                            <tr class="text-center">
                                <td colspan="10">
                                    <i class="fas fa-spinner fa-pulse fa-2x"></i>
                                </td>
                            </tr>
                        </tbody>
                        <tbody v-else>
                            <tr class="text-center" v-for="(request, key) in requests" :key="request.id">
                                <td class="text-left">{{ request.date_from }}</td>
                                <td>{{ request.date_to }}</td>
                                <td>{{ request.time_in.standard }}</td>
                                <td>{{ request.time_out.standard}}</td>
                                <td>{{ request.destination_from }}</td>
                                <td>{{ request.destination_to }}</td>
                                <td>{{ request.purpose }}</td>
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
import {  useEmployeeTripStore } from '@/store/employee/trip'
import { computed,  defineComponent } from 'vue'
import * as toastr from 'toastr';

export default defineComponent({
    async setup() {
        const EmTrip = useEmployeeTripStore();
        const requests = computed(() => EmTrip.getAllRequest)

        const editRequest = async (request_id: number) => {
            await EmTrip.setSelectedRequest(request_id);
            await EmTrip.setComponentTo('trip-show-request-component');
        }

        const deleteRequest = async (request_id: number, key: number) => {
            await EmTrip.deleteEmployeeTripRequest(request_id, key);
            toastr.success('Trip request deleted.');
        }

        return {
            EmTrip,
            requests,
            editRequest,
            deleteRequest
        }
    },
})
</script>
