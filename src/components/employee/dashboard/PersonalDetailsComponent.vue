<template>
    <div class="card">
        <div class="card-header">
            <h5 class="card-title">Personal Details</h5>
            <div class="card-tools">
                <button v-if="!isEdit" @click="isEdit = true" class="btn btn-primary btn-sm">
                    <i class="fas fa fa-pencil-alt"></i>
                </button>
                <template v-else>
                    <button @click="updatePersonalDetails()" class="btn btn-success btn-sm mr-1">
                        <i class="fas fa fa-check"></i>
                    </button>
                    <button @click="isEdit = false" class="btn btn-danger btn-sm">
                        <i class="fas fa fa-times"></i>
                    </button>
                </template>
            </div>
        </div>
        <div class="card-body p-0">
            <table class="table table-sm table-striped">
                <tbody>
                    <tr>
                        <td style="width: 50%;">First Name</td>
                        <td v-if="!isEdit" class="text-bold">{{ employee.first_name }}</td>
                        <td v-else>
                            <input type="text" v-model="employee.first_name" class="form-control form-control-sm">
                        </td>
                    </tr>
                    <tr>
                        <td>Middle Name</td>
                        <td v-if="!isEdit" class="text-bold">{{ employee.middle_name }}</td>
                        <td v-else>
                            <input type="text" v-model="employee.middle_name" class="form-control form-control-sm">
                        </td>
                    </tr>
                    <tr>
                        <td>Last Name</td>
                        <td v-if="!isEdit" class="text-bold">{{ employee.last_name }}</td>
                        <td v-else>
                            <input type="text" v-model="employee.last_name" class="form-control form-control-sm">
                        </td>
                    </tr>
                    <tr>
                        <td>Birthdate</td>
                        <td v-if="!isEdit" class="text-bold">{{ employee.birth_date }}</td>
                        <td v-else>
                            <input type="date" v-model="employee.birth_date" class="form-control form-control-sm">
                        </td>
                    </tr>
                    <tr>
                        <td>Civil Status</td>
                        <td v-if="!isEdit" class="text-bold">{{ employee.civil_status }}</td>
                        <td v-else>
                            <input type="text" v-model="employee.civil_status" class="form-control form-control-sm">
                        </td>
                    </tr>
                    <tr>
                        <td>Contact No. #1</td>
                        <td v-if="!isEdit" class="text-bold">{{ employee.contact_no_1 }}</td>
                        <td v-else>
                            <input type="text" v-model="employee.contact_no_1" class="form-control form-control-sm">
                        </td>
                    </tr>
                    <tr>
                        <td>Contact No. #2</td>
                        <td v-if="!isEdit" class="text-bold">{{ employee.contact_no_2 }}</td>
                        <td v-else>
                            <input type="text" v-model="employee.contact_no_2" class="form-control form-control-sm">
                        </td>
                    </tr>
                    <tr>
                        <td>Present Address</td>
                        <td v-if="!isEdit" class="text-bold">{{ employee.present_address }}</td>
                        <td v-else>
                            <input type="text" v-model="employee.present_address" class="form-control form-control-sm">
                        </td>
                    </tr>
                    <tr>
                        <td>Permanent Address</td>
                        <td v-if="!isEdit" class="text-bold">{{ employee.permanent_address }}</td>
                        <td v-else>
                            <input type="text" v-model="employee.permanent_address" class="form-control form-control-sm">
                        </td>
                    </tr>
                    <tr>
                        <td>SSS Number</td>
                        <td v-if="!isEdit" class="text-bold">{{ employee.sss }}</td>
                        <td v-else>
                            <input type="text" v-model="employee.sss" class="form-control form-control-sm">
                        </td>
                    </tr>
                    <tr>
                        <td>PAGIBIG ID</td>
                        <td v-if="!isEdit" class="text-bold">{{ employee.pagibig }}</td>
                        <td v-else>
                            <input type="text" v-model="employee.pagibig" class="form-control form-control-sm">
                        </td>
                    </tr>
                    <tr>
                        <td>PhilHealth ID</td>
                        <td v-if="!isEdit" class="text-bold">{{ employee.philhealth}}</td>
                        <td v-else>
                            <input type="text" v-model="employee.philhealth" class="form-control form-control-sm">
                        </td>
                    </tr>
                    <tr>
                        <td>Tax Identification Number</td>
                        <td v-if="!isEdit" class="text-bold">{{ employee.tin }}</td>
                        <td v-else>
                            <input type="text" v-model="employee.tin" class="form-control form-control-sm">
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>

    <div class="card">
        <div class="card-header">
            <h5 class="card-title">Company Details</h5>
            <div class="card-tools">
                <button v-if="!companyIsEdit" @click="companyIsEdit = true" class="btn btn-primary btn-sm">
                    <i class="fas fa fa-pencil-alt"></i>
                </button>
                <template v-else>
                    <button @click="companyIsEdit = false" class="btn btn-success btn-sm mr-1">
                        <i class="fas fa fa-check"></i>
                    </button>
                    <button @click="companyIsEdit = false" class="btn btn-danger btn-sm">
                        <i class="fas fa fa-times"></i>
                    </button>
                </template>
            </div>
        </div>
        <div class="card-body p-0">
            <table class="table table-sm table-striped">
                <tbody>
                    <tr>
                        <td style="width: 50%;">Employee ID</td>
                        <td v-if="!companyIsEdit" class="text-bold">{{ employee.employee_id }}</td>
                        <td v-else>
                            <input type="text" v-model="employee.employee_id" class="form-control form-control-sm">
                        </td>
                    </tr>
                    <tr>
                        <td>Date Hired</td>
                        <td v-if="!companyIsEdit" class="text-bold">{{employee.date_hired}}</td>
                        <td v-else>
                            <input type="text" v-model="employee.date_hired" class="form-control form-control-sm">
                        </td>
                    </tr>
                    <tr>
                        <td>Branch</td>
                        <td v-if="!companyIsEdit" class="text-bold">{{ employee.branch_id }}</td>
                        <td v-else>
                            <select type="text" v-model="employee.branch_id" class="form-control form-control-sm">
                                <option value="">Select Branch</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>Skype ID</td>
                        <td v-if="!companyIsEdit" class="text-bold">{{ employee.skype_id }}</td>
                        <td v-else>
                            <input type="text" v-model="employee.skype_id" class="form-control form-control-sm">
                        </td>
                    </tr>
                    <tr>
                        <td>Department</td>
                        <td v-if="!companyIsEdit" class="text-bold">{{ employee.department_id }}</td>
                        <td v-else>
                            <select type="text" v-model="employee.department_id" class="form-control form-control-sm">
                                <option value="">Select Department</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>Designation</td>
                        <td v-if="!companyIsEdit" class="text-bold">{{ employee.position }}</td>
                        <td v-else>
                            <input type="text" v-model="employee.position" class="form-control form-control-sm">
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import { usePersonalStore } from '@/store/employee/personal';

export default defineComponent({
    async setup() {
        const personal = usePersonalStore();

        const employee = computed(() => personal.getAllPersonalDetails)

        const isEdit = ref(false);
        const companyIsEdit = ref(false);

        const updateCompanyDetails = async () => {
            await personal.updatePersonalDetails(employee.value);
            companyIsEdit.value = false;
        }

        const updatePersonalDetails = async () => {
            await personal.updatePersonalDetails(employee.value);
            isEdit.value = false;
        }

        return {
            isEdit,
            companyIsEdit,
            employee,
            updateCompanyDetails,
            updatePersonalDetails
        }
    },
})
</script>
