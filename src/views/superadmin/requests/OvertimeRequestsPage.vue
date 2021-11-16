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
                        <input type="text" name="table_search" class="form-control float-right" placeholder="Search">

                        <div class="input-group-append">
                            <button type="submit" class="btn btn-default">
                                <i class="fas fa-search"></i>
                            </button>
                        </div>
                        </div>
                    </div>
                </div>
                <div class="card-body p-0">
                    <table class="table table-hovered table-striped text-sm">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>First Name</th>
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
                            <tr class="text-center">
                                <td colspan="11">
                                    <i class="fas fa-spinner fa-pulse fa-2x"></i>
                                </td>
                            </tr>
                        </tbody>
                        <tbody v-else>
                            <tr v-for="(overtime, key) in overtimes" :key="overtime.id">
                                <td>{{ overtime.id }}</td>
                                <td>{{ overtime.employee.first_name }}</td>
                                <td>{{ overtime.employee.last_name }}</td>
                                <td>{{ overtime.date }}</td>
                                <td>{{ overtime.from.standard }}</td>
                                <td>{{ overtime.to.standard }}</td>
                                <td>{{ overtime.reason }}</td>
                                <td class="text-center">
                                    <select @change="changeOvertimeStatus(overtime, key, $event.target.value)" class="form-control form-control-xs">
                                        <option selected>{{ overtime.status }}</option>
                                        <option value="Pending">Pending</option>
                                        <option value="Approved">Approved</option>
                                        <option value="Disapproved">Disapproved</option>
                                    </select>
                                </td>
                                <td>{{ overtime.created_at }}</td>
                                <td>
                                    <button @click="selectOvertime(overtime)" data-toggle="modal" data-target="#modal-lg" class="btn btn-primary btn-xs mr-1">
                                        <i class="fas fa-search"></i></button>
                                    <button @click="deleteOvertime(overtime.id, key)" class="btn btn-danger btn-xs">
                                        <i class="fas fa-times"></i></button>
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
                <div class="modal-header">
                    <h4 class="modal-title">Overtime of {{ selectedOvertime.first_name }} {{ selectedOvertime.last_name }}</h4>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
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
            <!-- /.modal-content -->
        </div>
        <!-- /.modal-dialog -->
    </div>
</template>

<script lang="ts">
import { SuperadminOvertimeTypes, useSuperadminOvertimeStore } from '@/store/superadmin/overtime'
import { computed, defineComponent, onBeforeMount, ref } from 'vue'
import * as toastr from 'toastr';

export default defineComponent({
    setup() {
        const overtime = useSuperadminOvertimeStore();
        const overtimes = computed(() => overtime.getAllFiledOvertimes);

        const selectedOvertime = ref({
            first_name: '',
            last_name: '',
            date: '',
            from: '',
            to: '',
            reason: ''
        });

        onBeforeMount(async () => {
            await overtime.loadAllOvertimes();
        })

        const changeOvertimeStatus = async (value : SuperadminOvertimeTypes, key : number, target : string) => {
            value.status = target;
            await overtime.changeOvertimeStatusTo(value, key);
            await toastr.info(`Overtime status set to ${value.status}`)
        }

        const selectOvertime = (value : SuperadminOvertimeTypes) => {
            selectedOvertime.value.first_name = value.employee.first_name;
            selectedOvertime.value.last_name = value.employee.last_name;
            selectedOvertime.value.date = value.date;
            selectedOvertime.value.from = value.from.standard;
            selectedOvertime.value.to = value.to.standard;
            selectedOvertime.value.reason = value.reason;
        }

        const deleteOvertime = async (overtimeId : number, key : number) => {
            let p = confirm('Delete this overtime?');
            if(p)
            await overtime.deleteOvertime(overtimeId, key);
            await toastr.success(`Overtime ID ${overtimeId} has been deleted.`);
        }

        return {
            overtime,
            overtimes,
            selectedOvertime,
            selectOvertime,
            changeOvertimeStatus,
            deleteOvertime
        }
    },
})
</script>
