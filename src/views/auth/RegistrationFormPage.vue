<template>
    <div style="width: 65%" class="card">
        <div class="card-header">
            <h5 class="card-title">
                <b>Registration Form</b>
            </h5>

            <div class="card-tools">
                <button @click="logout()" class="btn btn-danger btn-sm">
                    <i class="fas fa-sign-out-alt"></i>
                </button>
            </div>
        </div>
        <div class="card-body">
            <div class="row">
                <div class="form-group col-4">
                    <label>First name</label>
                    <input v-model="regsForm.first_name" type="text" :class="errors.hasOwnProperty('first_name') ? 'is-invalid' : ''" class="form-control" placeholder="Juan">
                    <i class="text-sm text-red" v-if="errors.hasOwnProperty('first_name')">{{ errors.first_name[0] }}</i>
                </div>
                <div class="form-group col-4">
                    <label
                    >Middle name</label>
                    <input v-model="regsForm.middle_name" type="text" :class="errors.hasOwnProperty('middle_name') ? 'is-invalid' : ''" class="form-control" placeholder="Dela">
                    <i class="text-sm text-red" v-if="errors.hasOwnProperty('middle_name')">{{ errors.middle_name[0] }}</i>
                </div>
                <div class="form-group col-4">
                    <label>Last name</label>
                    <input v-model="regsForm.last_name" type="text" :class="errors.hasOwnProperty('last_name') ? 'is-invalid' : ''" class="form-control" placeholder="Cruz">
                    <i class="text-sm text-red" v-if="errors.hasOwnProperty('last_name')">{{ errors.last_name[0] }}</i>
                </div>
                <div class="form-group col-12 col-md-6">
                    <label>Birthdate</label>
                    <input v-model="regsForm.birth_date" type="date" :class="errors.hasOwnProperty('birth_date') ? 'is-invalid' : ''" class="form-control">
                    <i class="text-sm text-red" v-if="errors.hasOwnProperty('birth_date')">{{ errors.birth_date[0] }}</i>
                </div>
                <div class="form-group col-12 col-md-6">
                    <label>Civil Status</label>
                    <select v-model="regsForm.civil_status" :class="errors.hasOwnProperty('civil_status') ? 'is-invalid' : ''" class="form-control">
                        <option selected>Select status</option>
                        <option value="Single">Single</option>
                        <option value="Married">Married</option>
                    </select>
                    <i class="text-sm text-red" v-if="errors.hasOwnProperty('civil_status')">{{ errors.civil_status[0] }}</i>
                </div>
                <div class="form-group col-12 col-md-6">
                    <label>Present address</label>
                    <input v-model="regsForm.present_address" type="text" :class="errors.hasOwnProperty('present_address') ? 'is-invalid' : ''" class="form-control" placeholder="#123 Street 123 Lot 123 Sample City">
                    <i class="text-sm text-red" v-if="errors.hasOwnProperty('present_address')">{{ errors.present_address[0] }}</i>
                </div>
                <div class="form-group col-12 col-md-6">
                    <label>Permanent address</label>
                    <input v-model="regsForm.permanent_address" type="text" class="form-control" :class="errors.hasOwnProperty('permanent_address') ? 'is-invalid' : ''" placeholder="#123 Street 123 Lot 123 Sample City">
                    <i class="text-sm text-red" v-if="errors.hasOwnProperty('permanent_address')">{{ errors.permanent_address[0] }}</i>
                </div>
                <div class="form-group col-12 col-md-6">
                    <label>Contact no. #1</label>
                    <input v-model="regsForm.contact_no_1" type="text" class="form-control" :class="errors.hasOwnProperty('contact_no_1') ? 'is-invalid' : ''" placeholder="0912-456-789">
                    <i class="text-sm text-red" v-if="errors.hasOwnProperty('contact_no_1')">{{ errors.contact_no_1[0] }}</i>
                </div>
                <div class="form-group col-12 col-md-6">
                    <label>Contact no. #2</label>
                    <input v-model="regsForm.contact_no_2" type="text" :class="errors.hasOwnProperty('contact_no_2') ? 'is-invalid' : ''" class="form-control" placeholder="0912-456-789">
                    <i class="text-sm text-red" v-if="errors.hasOwnProperty('contact_no_2')">{{ errors.contact_no_2[0] }}</i>
                </div>
                <div class="form-group col-12 col-md-3">
                    <label>TIN</label>
                    <input v-model="regsForm.tin" type="text" :class="errors.hasOwnProperty('tin') ? 'is-invalid' : ''" class="form-control" placeholder="000-000-000-000">
                    <i class="text-sm text-red" v-if="errors.hasOwnProperty('tin')">{{ errors.tin[0] }}</i>                    
                </div>
                <div class="form-group col-12 col-md-3">
                    <label>SSS</label>
                    <input v-model="regsForm.sss" type="text" :class="errors.hasOwnProperty('sss') ? 'is-invalid' : ''" class="form-control" placeholder="000-000-000-000">
                    <i class="text-sm text-red" v-if="errors.hasOwnProperty('tin')">{{ errors.tin[0] }}</i>                    
                    
                </div>
                <div class="form-group col-12 col-md-3">
                    <label>PhilHealth</label>
                    <input v-model="regsForm.philhealth" type="text" :class="errors.hasOwnProperty('philhealth') ? 'is-invalid' : ''" class="form-control" placeholder="000-000-000-000">
                    <i class="text-sm text-red" v-if="errors.hasOwnProperty('philhealth')">{{ errors.philhealth[0] }}</i>                    
                </div>
                <div class="form-group col-12 col-md-3">
                    <label>PAGIBIG</label>
                    <input v-model="regsForm.pagibig" type="text" :class="errors.hasOwnProperty('pagibig') ? 'is-invalid' : ''" class="form-control" placeholder="000-000-000-000">
                    <i class="text-sm text-red" v-if="errors.hasOwnProperty('pagibig')">{{ errors.pagibig[0] }}</i>                    
                </div>
                <div class="form-group col-12 col-md-4">
                    <label>Employee ID</label>
                    <input v-model="regsForm.employee_id" type="text" :class="errors.hasOwnProperty('employee_id') ? 'is-invalid' : ''" class="form-control" placeholder="19991234">
                    <i class="text-sm text-red" v-if="errors.hasOwnProperty('employee_id')">{{ errors.employee_id[0] }}</i>                    
                </div>
                <div class="form-group col-12 col-md-4">
                    <label>Branch</label>
                    <select v-model="regsForm.branch_id" :class="errors.hasOwnProperty('branch_id') ? 'is-invalid' : ''" class="form-control">
                        <option selected>Select</option>
                        <option v-for="branch in branches" :key="branch.id" :value="branch.id">{{ branch.display_name }}</option>
                    <i class="text-sm text-red" v-if="errors.hasOwnProperty('branch_id')">{{ errors.branch_id[0] }}</i>                    
                    </select>
                </div>
                <div class="form-group col-12 col-md-4">
                    <label>Date hired</label>
                    <input v-model="regsForm.date_hired" type="date" :class="errors.hasOwnProperty('date_hired') ? 'is-invalid' : ''" class="form-control">
                    <i class="text-sm text-red" v-if="errors.hasOwnProperty('date_hired')">{{ errors.date_hired[0] }}</i>                    
                </div>
                <div class="form-group col-12 col-md-6">
                    <label>Department</label>
                    <select v-model="regsForm.department_id" :class="errors.hasOwnProperty('department_id') ? 'is-invalid' : ''" class="form-control">
                        <option selected>Select</option>
                        <option v-for="dept in departments" :key="dept.id" :value="dept.id">{{ dept.display_name }}</option>
                    </select>
                    <i class="text-sm text-red" v-if="errors.hasOwnProperty('department_id')">{{ errors.department_id[0] }}</i>                    
                </div>
                <div class="form-group col-12 col-md-6">
                    <label>Position</label>
                    <input v-model="regsForm.position" type="text" :class="errors.hasOwnProperty('position') ? 'is-invalid' : ''" class="form-control" placeholder="IT Specialist">
                    <i class="text-sm text-red" v-if="errors.hasOwnProperty('position')">{{ errors.position[0] }}</i>                    
                </div>
                <div class="form-group col-12">
                    <label>Skype ID</label>
                    <input v-model="regsForm.skype_id" type="text" :class="errors.hasOwnProperty('skype_id') ? 'is-invalid' : ''" class="form-control" placeholder="live:test_1">
                    <i class="text-sm text-red" v-if="errors.hasOwnProperty('department_id')">{{ errors.department_id[0] }}</i>                    
                </div>
            </div>
        </div>
        <div class="card-footer">
            <button @click="submitRegistration()" class="btn btn-block btn-primary btn-sm">Submit</button>
        </div>
    </div>
</template>

<script lang="ts">
import { useAuthStore } from '@/store/auth';
import { usePersonalStore } from '@/store/employee/personal';
import { useSettingBranchStore } from '@/store/superadmin/settings/branch';
import { useSettingDepartmentStore } from '@/store/superadmin/settings/department';
import { computed, defineComponent, onBeforeMount, ref } from 'vue'
import { useRouter } from 'vue-router';

export default defineComponent({
    setup() {
        const auth = useAuthStore();
        const employee = usePersonalStore();
        const branch = useSettingBranchStore();
        const department = useSettingDepartmentStore();
        const router = useRouter();

        const regsForm = ref({
            first_name: '',
            middle_name: '',
            last_name: '',
            birth_date: '',
            civil_status: '',
            present_address: '',
            permanent_address: '',
            contact_no_1: '',
            contact_no_2: '',
            tin: '',
            sss: '',
            philhealth: '',
            pagibig: '',
            employee_id: '',
            branch_id: '',
            date_hired: '',
            department_id: '',
            position: '',
            skype_id: ''
        });

        const branches = computed(() => branch.getAllBranch);
        const departments = computed(() => department.getAllDepartments);
        const errors = computed(() => employee.getErrors);

        const submitRegistration = async () => {
            await employee.registerPersonalDetails(regsForm.value);
            await router.push('/');
            alert('Record submitted.')
        }

        const logout = async () => {
            let q = confirm('Logout?')
            if (q) {
                await auth.logUserOut();
                await router.push('/');
            }
        }

        onBeforeMount(async () => {
            await branch.loadAllBranches();
            await department.loadAllDepartment();
        });

        return {
            employee,
            regsForm,
            branches,
            departments,
            errors,
            submitRegistration,
            logout
        }
    },
})
</script>
