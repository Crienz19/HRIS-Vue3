<template>
   <div class="row">
       <div class="col-12">
            <div class="alert alert-primary">
                <h5>Subs Leave Request</h5>
            </div>
       </div>
   </div>
   <div class="row">
       <div class="col-12">
           <div class="card">
               <div class="card-header">
                   <h3 class="card-title">Leave Subs</h3>
                   <div class="card-tools">
                        <div class="input-group input-group-sm" style="width: 150px;">
                        <input v-model="leaveSearch" type="text" name="table_search" class="form-control float-right" placeholder="Search by last name">

                        <!-- <div class="input-group-append">
                            <button type="submit" class="btn btn-default">
                                <i class="fas fa-search"></i>
                            </button>
                        </div> -->
                        </div>
                    </div>
               </div>
               <div class="card-body p-0">
                   <table class="table table-sm table-striped text-center">
                       <thead>
                           <tr>
                               <th class="text-left">ID</th>
                               <th>First name</th>
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
                       <tbody v-if="getIsRequestLoading">
                           <tr>
                               <td colspan="11">
                                   <i class="fas fa fa-pulse fa-spinner fa-2x"></i>
                               </td>
                           </tr>
                       </tbody>
                       <tbody v-else>
                           <template v-if="leaves.length > 0">
                               <tr v-for="(leave, key) in leaves" :key="leave.id">
                                    <td class="text-left">{{ leave.id }}</td>
                                    <td>{{ leave.employee.first_name }}</td>
                                    <td>{{ leave.employee.last_name }}</td>
                                    <td>{{ leave.type }}</td>
                                    <td>{{ leave.pay_type }}</td>
                                    <td>{{ leave.from }}</td>
                                    <td>{{ leave.to }}</td>
                                    <td>
                                        <i v-if="leave.recommending_approval == 'Pending'" class="text-warning fas fa fa-exclamation"></i>
                                        <i v-if="leave.recommending_approval == 'Approved'" class="text-success fas fa fa-check"></i>
                                        <i v-if="leave.recommending_approval == 'Disapproved'" class="text-danger fas fa fa-times"></i>
                                    </td>
                                    <td>
                                        <i v-if="leave.final_approval == 'Pending'" class="text-warning fas fa fa-exclamation"></i>
                                        <i v-if="leave.final_approval == 'Approved'" class="text-success fas fa fa-check"></i>
                                        <i v-if="leave.final_approval == 'Disapproved'" class="text-danger fas fa fa-times"></i>
                                    </td>
                                    <td>{{ leave.created_at }}</td>
                                    <td>
                                        <button data-toggle="modal" data-target="#modal-lg" @click="selectThisRequest(leave, key)" class="btn btn-sm btn-primary">
                                            <i class="fas fa fa-search"></i>
                                        </button>
                                    </td>
                                </tr>
                           </template>
                           <template v-else>
                               <tr>
                                   <td colspan="11" class="text-center">No record to display</td>
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
                <div v-if="getIsRequestLoading" class="overlay">
                    <i class="fas fa-2x fa-spinner fa-spin"></i>
                </div>
                <div class="modal-header">
                    <h4 class="modal-title">Leave of {{ selectedLeave.first_name }} {{ selectedLeave.last_name }}</h4>
                    <button id="modal-close" type="button" class="close" data-dismiss="modal" aria-label="Close">
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
                            <label>To</label>
                            <input v-model="selectedLeave.to" type="text" class="form-control form-control-sm" disabled>
                        </div>
                        <div v-if="selectedLeave.time_from" class="form-group col-6">
                            <label>Time From</label>
                            <input v-model="selectedLeave.time_from" type="text" class="form-control form-control-sm" disabled>
                        </div>
                        <div v-if="selectedLeave.time_to" class="form-group col-6">
                            <label>Time To</label>
                            <input v-model="selectedLeave.time_to" type="text" class="form-control form-control-sm" disabled>
                        </div>
                        <div class="form-group col-12">
                            <label>Reason</label>
                            <textarea v-model="selectedLeave.reason" disabled cols="30" rows="10" class="form-control form-control-sm"></textarea>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button @click="approveThisRequest(selectedLeave.id)" :disabled="selectedLeave.recommending_approval == 'Approved'" class="btn btn-success btn-block">Approve</button>
                    <button @click="disapproveThisRequest(selectedLeave.id)" :disabled="selectedLeave.recommending_approval == 'Disapproved'" class="btn btn-danger btn-block">Disapprove</button>
                </div>
            </div>
            <!-- /.modal-content -->
        </div>
        <!-- /.modal-dialog -->
    </div>
</template>

<script lang="ts">
import { computed, defineComponent, onBeforeMount, ref } from 'vue'
import { SupervisorLeaveTypes, useSupervisorLeaveStore } from '@/store/supervisor/leave';
import { storeToRefs } from 'pinia';

export default defineComponent({
    setup() {
        const SupLeaveStore = useSupervisorLeaveStore();
        const {
            getSubsLeave,
            getIsRequestLoading,
        } = storeToRefs(SupLeaveStore);

        const leaveSearch = ref("");
        const leaves = computed(() => {
            return getSubsLeave.value.filter((leave) => {
                return (leave.employee.last_name.toLowerCase().match(leaveSearch.value))
            })
        });

        const selectedKey = ref(0);
        const selectedLeave = ref({
            id: 0,
            first_name: '',
            last_name: '',
            type: '',
            pay_type: '',
            from: '',
            to: '',
            time_from: '',
            time_to: '',
            reason:'',
            recommending_approval: '',
            final_approval: ''
        });

        onBeforeMount(async () => {
            await SupLeaveStore.loadSubsLeave();
        })

        const selectThisRequest = async (value : SupervisorLeaveTypes, key : number) => {
            selectedLeave.value.id = value.id;
            selectedLeave.value.first_name = value.employee.first_name;
            selectedLeave.value.last_name = value.employee.last_name;
            selectedLeave.value.type = value.type;
            selectedLeave.value.pay_type = value.pay_type;
            selectedLeave.value.from = value.from;
            selectedLeave.value.to = value.to;
            selectedLeave.value.time_from = value.time_from;
            selectedLeave.value.time_to = value.time_to;            
            selectedLeave.value.reason = value.reason;
            selectedLeave.value.recommending_approval = value.recommending_approval;
            selectedLeave.value.final_approval = value.final_approval;
            selectedKey.value = key;
        }


        const approveThisRequest = async (requestId : number) => {
            await SupLeaveStore.approveSelectedLeave(requestId, selectedKey.value);
            await document.getElementById('modal-close')?.click();
        }

        const disapproveThisRequest = async (requestId : number) => {
            await SupLeaveStore.disapproveSelectedLeave(requestId, selectedKey.value);
            await document.getElementById('modal-close')?.click();
        }

        return {
            leaves,
            selectedLeave,
            leaveSearch,
            getIsRequestLoading,
            selectThisRequest,
            approveThisRequest,
            disapproveThisRequest
        }
    },
})
</script>
