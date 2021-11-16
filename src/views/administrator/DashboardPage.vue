<template>
    <div class="alert alert-primary">
        <b>Registered Employees</b>
    </div>
    <div class="card">
        <div class="card-header">
            <h3 class="card-title">Registered Employees</h3>
            
            <div class="card-tools">
                <button @click="resyncAllEmployees()" class="btn btn-success btn-sm">
                    <i class="fas fa-sync"></i>
                </button>
            </div>
        </div>
        <div class="card-body p-0">
            <table class="table table-striped">
                <thead>
                    <tr class="text-center">
                        <th class="text-left">First Name</th>
                        <th>Last Name</th>
                        <th>Department</th>
                        <th>VL</th>
                        <th>SL</th>
                        <th>PTO</th>
                        <th>Special</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody v-if="employee.isRequestLoading">
                    <tr>
                        <td colspan="8" class="text-center">
                            <i class="fas fa fa-pulse fa-spinner fa-2x"></i>
                        </td>
                    </tr>
                </tbody>
                <tbody v-else>
                    <tr v-for="emp in employees" :key="emp.id" class="text-center">
                        <td class="text-left">{{ emp.first_name }}</td>
                        <td>{{ emp.last_name }}</td>
                        <td>{{ emp.department.display_name }}</td>
                        <td>{{ emp.credits.VL }} / {{ emp.credits.total_VL }}</td>
                        <td>{{ emp.credits.SL }} / {{ emp.credits.total_SL }}</td>
                        <td>{{ emp.credits.PTO }} / {{ emp.credits.total_PTO }}</td>
                        <td>{{ emp.credits.special_leave }} / {{ emp.credits.total_special_leave }}</td>
                        <td>
                            <button data-toggle="modal" data-target="#modal-personal" @click="selectThisUser(emp)" class="btn btn-primary btn-sm">
                                <i class="fas fa-search"></i>
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class="modal fade show" id="modal-personal" aria-modal="true" role="dialog">
        <div class="modal-dialog modal-xl modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title">Personal</h4>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-3">
                            <div class="card">
                                <div class="card-body">
                                    <img :src="selectedUser?.user.profile_image" alt="User image" style="width: 100%; height: 200;">
                                </div>
                            </div>
                        </div>
                        <div class="col-9" style="overflow-y: auto;">
                            <div class="card">
                                <div class="card-header">
                                    <h4 class="card-title">Personal Details</h4>
                                </div>
                                <div class="card-body p-0">
                                    <table class="table table-sm table-striped ">
                                        <tbody>
                                            <tr>
                                                <td style="width: 55%">First Name</td>
                                                <td>{{ selectedUser?.first_name }}</td>
                                            </tr>
                                            <tr>
                                                <td>Middle Name</td>
                                                <td>{{ selectedUser?.middle_name }}</td>
                                            </tr>
                                            <tr>
                                                <td>Last Name</td>
                                                <td>{{ selectedUser?.last_name }}</td>
                                            </tr>
                                            <tr>
                                                <td>E-mail address</td>
                                                <td>{{ selectedUser?.user.email }}</td>
                                            </tr>
                                            <tr>
                                                <td>Birth Date</td>
                                                <td>{{ selectedUser?.birth_date }}</td>
                                            </tr>
                                            <tr>
                                                <td>Civil Status</td>
                                                <td>{{ selectedUser?.civil_status }}</td>
                                            </tr>
                                            <tr>
                                                <td>Contact #1</td>
                                                <td>{{ selectedUser?.contact_no_1 }}</td>
                                            </tr>
                                            <tr>
                                                <td>Contact #2</td>
                                                <td>{{ selectedUser?.contact_no_2 }}</td>
                                            </tr>
                                            <tr>
                                                <td>Present Address</td>
                                                <td>{{ selectedUser?.present_address }}</td>
                                            </tr>
                                            <tr>
                                                <td>Permanent Address</td>
                                                <td>{{ selectedUser?.permanent_address }}</td>
                                            </tr>
                                            <tr>
                                                <td>SSS Number</td>
                                                <td>{{ selectedUser?.sss }}</td>
                                            </tr>
                                            <tr>
                                                <td>PAGIBIG ID</td>
                                                <td>{{ selectedUser?.pagibig }}</td>
                                            </tr>
                                            <tr>
                                                <td>PhilHealth ID</td>
                                                <td>{{ selectedUser?.philhealth }}</td>
                                            </tr>
                                            <tr>
                                                <td>TIN</td>
                                                <td>{{ selectedUser?.tin }}</td>
                                            </tr>
                                        </tbody>
                                    </table>  
                                </div>
                            </div>
                            <div class="card">
                                <div class="card-header">
                                    <h4 class="card-title">Company Details</h4>
                                </div>
                                <div class="card-body p-0">
                                    <table class="table table-sm table-striped ">
                                        <tbody>
                                            <tr>
                                                <td style="width: 55%">Employee ID</td>
                                                <td>{{ selectedUser?.employee_id }}</td>
                                            </tr>
                                            <tr>
                                                <td>Date Hired</td>
                                                <td>{{ selectedUser?.date_hired }}</td>
                                            </tr>
                                            <tr>
                                                <td>Branch</td>
                                                <td>{{ selectedUser?.branch.display_name }}</td>
                                            </tr>
                                            <tr>
                                                <td>Skype ID</td>
                                                <td>{{ selectedUser?.skype_id }}</td>
                                            </tr>
                                            <tr>
                                                <td>Department</td>
                                                <td>{{ selectedUser?.department.display_name }}</td>
                                            </tr>
                                            <tr>
                                                <td>Designation</td>
                                                <td>{{ selectedUser?.position }}</td>
                                            </tr>
                                            
                                        </tbody>
                                    </table>  
                                </div>
                            </div>
                            <div class="card">
                                <div class="card-header">
                                    <h4 class="card-title">Leave Credits</h4>
                                </div>
                                <div class="card-body p-0">
                                    <table class="table table-sm table-striped ">
                                        <tbody>
                                            <tr>
                                                <td style="width: 55%">VL</td>
                                                <td>
                                                    <div class="progress progress">
                                                        <div class="progress-bar bg-primary progress-bar-striped" role="progressbar" :style="`width:${(selectedUser?.credits.VL / selectedUser?.credits.total_VL) * 100}%;`">
                                                            <span>{{ selectedUser?.credits.VL }} / {{ selectedUser?.credits.total_VL}}</span>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>SL</td>
                                                <td>
                                                    <div class="progress progress">
                                                        <div class="progress-bar bg-primary progress-bar-striped" role="progressbar" :style="`width:${(selectedUser?.credits.SL / selectedUser?.credits.total_SL) * 100}%;`">
                                                            <span>{{ selectedUser?.credits.SL }} / {{ selectedUser?.credits.total_SL}}</span>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>PTO</td>
                                                <td>
                                                    <div class="progress progress">
                                                        <div class="progress-bar bg-primary progress-bar-striped" role="progressbar" :style="`width:${(selectedUser?.credits.PTO / selectedUser?.credits.total_PTO) * 100}%;`">
                                                            <span>{{ selectedUser?.credits.PTO }} / {{ selectedUser?.credits.total_PTO}}</span>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr v-if="selectedUser?.credits.special_leave > 0">
                                                <td>Special Leave</td>
                                                <td>
                                                    <div class="progress progress">
                                                        <div class="progress-bar bg-primary progress-bar-striped" role="progressbar" :style="`width:${(selectedUser?.credits.special_leave / selectedUser?.credits.total_special_leave) * 100}%;`">
                                                            <span>{{ selectedUser?.credits.special_leave }} / {{ selectedUser?.credits.special_leave}}</span>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>  
                                </div>
                            </div>
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
import { useAdminEmployeeStore } from '@/store/administrator/employee';
import { HumanResourceEmployeeTypes } from '@/store/hr/employee';

export default defineComponent({
    setup() {
        const employee = useAdminEmployeeStore();
        const employees = computed(() => employee.getAllEmployees);
        const selectedUser = ref<HumanResourceEmployeeTypes>();

        onBeforeMount(async () => {
            await employee.loadAllEmployees();
        })
        
        const selectThisUser = (data : HumanResourceEmployeeTypes) => {
            selectedUser.value = data;
        }

        const resyncAllEmployees = async () => {
            await employee.reloadAllEmployees();
        }

        return {
            employee,
            employees,
            selectedUser,
            resyncAllEmployees,
            selectThisUser
        }
    },
})
</script>
