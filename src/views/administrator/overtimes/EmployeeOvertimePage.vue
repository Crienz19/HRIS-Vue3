<template>
    <div class="row">
       <div class="col-12">
            <div class="alert alert-primary">
                <h5>Testing</h5>
            </div>
       </div>
   </div>
   <div class="row">
       <div class="col-12">
           <div class="card">
               <div class="card-header">
                   <h3 class="card-title">Overtime subs</h3>
               </div>
               <div class="card-body p-0">
                   <table class="table table-sm table-striped text-center">
                       <thead>
                           <tr>
                               <th class="text-left">ID</th>
                               <th>First name</th>
                               <th>Last name</th>
                               <th>Date</th>
                               <th>From</th>
                               <th>To</th>
                               <th>Reason</th>
                               <th>Status</th>
                               <th>Created At</th>
                               <th>Actions</th>
                           </tr>
                       </thead>
                       <tbody v-if="overtime.isRequestLoading">
                           <tr>
                               <td colspan="10">
                                   <i class="fas fa fa-pulse fa-spinner fa-2x"></i>
                               </td>
                           </tr>
                       </tbody>
                       <tbody v-else>
                           <tr v-for="(ot, key) in overtimes" :key="ot.id">
                               <td class="text-left">{{ ot.id }}</td>
                               <td>{{ ot.employee.first_name }}</td>
                               <td>{{ ot.employee.last_name }}</td>
                               <td>{{ ot.date }}</td>
                               <td>{{ ot.from.other }}</td>
                               <td>{{ ot.to.other }}</td>
                               <td>{{ ot.reason }}</td>
                               <td>
                                   <i v-if="ot.status == 'Pending'" class="text-warning fas fa fa-exclamation"></i>
                                   <i v-if="ot.status == 'Approved'" class="text-success fas fa fa-check"></i>
                                   <i v-if="ot.status == 'Disapproved'" class="text-danger fas fa fa-times"></i>
                               </td>
                               <td>{{ ot.created_at }}</td>
                               <td>
                                   <button data-toggle="modal" data-target="#modal-lg" @click="selectThisOvertime(ot, key)" class="btn btn-sm btn-primary">
                                       <i class="fas fa fa-search"></i>
                                   </button>
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
import { useAdminEmpOvertimeStore } from '@/store/administrator/e_overtime'
import { SuperadminOvertimeTypes } from '@/store/superadmin/overtime';
import { computed, defineComponent, onBeforeMount } from 'vue'

export default defineComponent({
    setup() {
        const overtime = useAdminEmpOvertimeStore();
        const overtimes = computed(() => overtime.getAllOvertimeRequest);

        const selectThisOvertime = (value : SuperadminOvertimeTypes, key : number) => {
            console.log(value, key);
            
        }

        onBeforeMount(async () => {
            await overtime.loadAllEmployeeOvertime();
        })

        return {
            overtime,
            overtimes,
            selectThisOvertime
        }
    },
})
</script>
