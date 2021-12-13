<template>
   
   <div class="row">
       <div class="col-12">
           <div class="card">
               <div class="card-header">
                   <h3 class="card-title">Overtime subs</h3>
                   <div class="card-tools">
                        <div class="input-group input-group-sm" style="width: 150px;">
                        <input v-model="overtimeSearch" type="text" name="table_search" class="form-control float-right" placeholder="Search by last name">

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
                           <tr v-for="(ot, key) in overtimes" :key="ot.id" :class="setRowStatusColor(ot.status)">
                               <td class="text-left">{{ ot.id }}</td>
                               <td>{{ ot.employee.first_name }}</td>
                               <td>{{ ot.employee.last_name }}</td>
                               <td>{{ ot.date }}</td>
                               <td>{{ ot.from.other }}</td>
                               <td>{{ ot.to.other }}</td>
                               <td>{{ ot.reason }}</td>
                               <td>
                                   <i v-if="ot.status == 'Pending'" class="fas fa fa-exclamation"></i>
                                   <i v-if="ot.status == 'Approved'" class="fas fa fa-check"></i>
                                   <i v-if="ot.status == 'Disapproved'" class="fas fa fa-times"></i>
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

   <div class="modal fade show" id="modal-lg" aria-modal="true" role="dialog">
        <div class="modal-dialog modal-lg modal-dialog-centered">
            <div class="modal-content">
                 <div v-if="overtime.isRequestLoading" class="overlay">
                    <i class="fas fa-2x fa-spinner fa-spin"></i>
                </div>
                <div class="modal-header">
                    <h4 class="modal-title">Overtime of {{ selectedOvertime.first_name }} {{ selectedOvertime.last_name }}</h4>
                    <button id="modal-close" type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="form-group col-12">
                            <label>Date</label>
                            <input v-model="selectedOvertime.date" type="text" class="form-control form-control-sm" disabled>
                        </div>
                        <div class="form-group col-6">
                            <label>From</label>
                            <input v-model="selectedOvertime.from" type="text" class="form-control form-control-sm" disabled>
                        </div>
                        <div class="form-group col-6">
                            <label>To</label>
                            <input v-model="selectedOvertime.to" type="text" class="form-control form-control-sm" disabled>
                        </div>
                        <div class="form-group col-12">
                            <label>Reason</label>
                            <textarea v-model="selectedOvertime.reason" disabled cols="30" rows="10" class="form-control form-control-sm"></textarea>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import useHelpers from '@/composables/helper';
import { useHumanResourceOvertimeStore } from '@/store/hr/overtime'
import { SupervisorOvertimeTypes } from '@/store/supervisor/overtime';
import { computed, defineComponent, onBeforeMount, ref } from 'vue'

export default defineComponent({
    setup() {
        const { setRowStatusColor } = useHelpers();
        const overtime = useHumanResourceOvertimeStore();

        const selectedKey = ref(0);
        const selectedOvertime = ref({
            id: 0,
            first_name: '',
            last_name: '',
            date: '',
            from: '',
            to: '',
            reason: '',
            status: ''
        });
        const overtimeSearch = ref("");

        const overtimes = computed(() => {
            return overtime.getAllOvertimes.filter((overtime) => {
                return (overtime.employee.last_name.toLowerCase().match(overtimeSearch.value));
            });
        });

        const selectThisOvertime = (value : SupervisorOvertimeTypes, key : number) => {
            selectedOvertime.value.id = value.id;
            selectedOvertime.value.first_name = value.employee.first_name;
            selectedOvertime.value.last_name = value.employee.last_name;
            selectedOvertime.value.date = value.date;
            selectedOvertime.value.from = value.from.standard;
            selectedOvertime.value.to = value.to.standard;
            selectedOvertime.value.reason = value.reason;
            selectedOvertime.value.status = value.status;
            selectedKey.value = key;
        }

        onBeforeMount(async () => {
            await overtime.loadAllOvertimes();
        })

        return {
            overtime,
            overtimes,
            selectedOvertime,
            overtimeSearch,
            selectThisOvertime,
            setRowStatusColor
        }
    },
})
</script>
