<template>
    <div class="row">
        <div class="col-12">
            <div class="alert alert-primary">
                jksldfjsl
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-header">
                    <h5 class="card-title"><b>Leave Request</b></h5>

                    <div class="card-tools">
                        <div class="input-group input-group-sm" style="width: 150px;">
                        <input v-model="leaveSearch" type="text" name="table_search" class="form-control float-right" placeholder="Search">

                        <!-- <div class="input-group-append">
                            <button type="submit" class="btn btn-default">
                                <i class="fas fa-search"></i>
                            </button>
                        </div> -->
                        </div>
                    </div>
                </div>
                <div class="card-body p-0">
                    <table class="table table-hovered table-striped text-sm">
                        <thead>
                            <tr class="text-center">
                                <th class="text-left">ID</th>
                                <th>First Name</th>
                                <th>Last name</th>
                                <th>Type</th>
                                <th>Pay</th>
                                <th>From</th>
                                <th>To</th>
                                <th>Recommending Approval</th>
                                <th>Final Approval</th>
                                <th>Created At</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody v-if="leave.isRequestLoading">
                            <tr class="text-center">
                                <td colspan="11">
                                    <i class="fas fa-spinner fa-pulse fa-2x"></i>
                                </td>
                            </tr>
                        </tbody>
                        <tbody v-else>
                            <template v-if="leaves.length > 0">
                                <tr class="text-center" v-for="(leave, key) in leaves" :key="leave.id">
                                    <td class="text-left">{{ leave.id }}</td>
                                    <td>{{ leave.employee.first_name }}</td>
                                    <td>{{ leave.employee.last_name }}</td>
                                    <td>{{ leave.type }}</td>
                                    <td>{{ leave.pay_type }}</td>
                                    <td>{{ leave.from }}</td>
                                    <td>{{ leave.to }}</td>
                                    <td>
                                        <select @change="changeRecommendingApproval(leave, key, $event.target.value)" class="form-control form-control-xs">
                                            <option selected>{{ leave.recommending_approval }}</option>
                                            <option value="Pending">Pending</option>
                                            <option value="Approved">Approved</option>
                                            <option value="Disapproved">Disapproved</option>
                                        </select>
                                    </td>
                                    <td>
                                        <select @change="changeFinalApproval(leave, key, $event.target.value)" class="form-control form-control-xs">
                                            <option selected>{{ leave.final_approval }}</option>
                                            <option value="Pending">Pending</option>
                                            <option value="Approved">Approved</option>
                                            <option value="Disapproved">Disapproved</option>
                                        </select>
                                    </td>
                                    <td>{{ leave.created_at }}</td>
                                    <td>
                                        <button @click="selectLeave(leave)" data-toggle="modal" data-target="#modal-lg" class="btn btn-primary btn-xs mr-1">
                                            <i class="fas fa-search"></i></button>

                                        <button @click="deleteLeave(leave.id, key)" class="btn btn-danger btn-xs">
                                            <i class="fas fa-times"></i>
                                        </button>
                                    </td>
                                </tr>
                            </template>
                            <template v-else>
                                <tr>
                                    <td colspan="11" class="text-center">No data to display</td>
                                </tr>
                            </template>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>

    <div class="modal fade show" id="modal-lg" aria-modal="true" role="dialog">
        <div class="modal-dialog modal-lg modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title">Leave of {{ selectedLeave.first_name }} {{ selectedLeave.last_name }}</h4>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="form-group col-md-6">
                            <label>Type</label>
                            <input v-model="selectedLeave.type" type="text" class="form-control form-control-sm" disabled>
                        </div>
                        <div class="form-group col-md-6">
                            <label>Pay</label>
                            <input v-model="selectedLeave.pay_type" type="text" class="form-control form-control-sm" disabled>
                        </div>
                        <div class="form-group col-md-6">
                            <label>From</label>
                            <input v-model="selectedLeave.from" type="text" class="form-control form-control-sm" disabled>
                        </div>
                        <div class="form-group col-md-6">
                            <label>Time From</label>
                            <input v-model="selectedLeave.to" type="text" class="form-control form-control-sm" disabled>
                        </div>
                        <div v-if="selectedLeave.time_from" class="form-group col-6">
                            <label>Time To</label>
                            <input v-model="selectedLeave.time_from" type="text" class="form-control form-control-sm" disabled>
                        </div>
                        <div v-if="selectedLeave.time_to" class="form-group col-6">
                            <label>To</label>
                            <input v-model="selectedLeave.time_to" type="text" class="form-control form-control-sm" disabled>
                        </div>
                        <div class="form-group col-12">
                            <label>Reason</label>
                            <textarea v-model="selectedLeave.reason" disabled cols="30" rows="10" class="form-control form-control-sm"></textarea>
                        </div>
                    </div>
                </div>
            </div>
            <!-- /.modal-content -->
        </div>
        <!-- /.modal-dialog -->
    </div>
</template>

<script lang="ts">
import { computed, defineComponent, onBeforeMount, ref } from 'vue'
import { SuperadminLeaveTypes, useSuperadminLeaveStore } from '@/store/superadmin/leave';
import * as toastr from 'toastr';

export default defineComponent({
    setup() {
        const leave = useSuperadminLeaveStore();

        const leaveSearch = ref("");

        const leaves = computed(() => {
            return leave.getAllFiledLeaves.filter((leave) => {
                return (leave.employee.last_name.toLowerCase().match(leaveSearch.value))
            })
        });

        const selectedLeave = ref({
            first_name: '',
            last_name: '',
            type: '',
            pay_type: '',
            from: '',
            to: '',
            time_from: '',
            time_to: '',
            reason: ''
        })

        onBeforeMount(async () => {
            await leave.loadAllLeaves();
        })

        const changeRecommendingApproval = async (value : SuperadminLeaveTypes, key : number, target : string) => {
            value.recommending_approval = target;
            await leave.changeRecommendingApprovalStatusTo(value, key)
            await toastr.success(`Leave ID ${value.id} recommending approval set to ${value.recommending_approval}`);
        }

        const changeFinalApproval = async (value : SuperadminLeaveTypes, key : number, target : string) => {
            value.final_approval = target;
            await leave.changeFinalApprovalStatusTo(value, key);
            await toastr.success(`Leave ID ${value.id} final approval set to ${value.final_approval}`);
        }

        const selectLeave = (value : SuperadminLeaveTypes) => {
            selectedLeave.value.first_name = value.employee.first_name;
            selectedLeave.value.last_name = value.employee.last_name;
            selectedLeave.value.type = value.type;
            selectedLeave.value.pay_type = value.pay_type;
            selectedLeave.value.from = value.from;
            selectedLeave.value.to = value.to;
            selectedLeave.value.time_from = value.time_from;
            selectedLeave.value.time_to = value.time_to;
            selectedLeave.value.reason = value.reason;
        }

        const deleteLeave = async (leaveId: number, key : number) => {
            let p = confirm('Delete this leave?');
            if(p)
            await leave.deleteLeave(leaveId, key)
            await toastr.success(`Leave ID ${leaveId} deleted.`)
        }

        return {
            leave,
            leaves,
            selectedLeave,
            leaveSearch,
            changeRecommendingApproval,
            changeFinalApproval,
            selectLeave,
            deleteLeave
        }
    },
})
</script>
