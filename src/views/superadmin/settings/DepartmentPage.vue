<template>
    <div class="row">
        <div class="col-12">
            <div class="alert alert-primary">
                sadasd
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-3">
            <div class="card">
                <div class="card-header">
                    <h3 class="card-title">
                        Departments
                    </h3>
                </div>
                <div class="card-body">
                    <div class="form-group">
                        <label>Name</label>
                        <input v-model="departmentForm.name" type="text" name="" id="" class="form-control form-control-sm">
                    </div>
                    <div class="form-group">
                        <label>Display Name</label>
                        <input v-model="departmentForm.display_name" type="text" name="" id="" class="form-control form-control-sm">
                    </div>
                    <div class="form-group">
                        <label>Supervisor</label>
                        <select v-model="departmentForm.supervisor_id" class="form-control form-control-sm">
                            <option value="">Select Supervisor</option>
                            <option v-for="sup in supervisors" :key="sup.id" :value="sup.id">{{ sup.name }}</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <template v-if="!isEdit">
                            <button @click="addDepartment()" class="btn btn-primary btn-sm">Add</button>
                        </template>

                        <template v-else>
                            <button @click="updateDepartment()" class="btn btn-success btn-sm mr-1">Update</button>
                            <button class="btn btn-danger btn-sm">Cancel</button>
                        </template>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-9">
            <div class="card">
                <div class="card-header">
                    <h3 class="card-title">Department List</h3>
                </div>
                <div class="card-body p-0">
                    <table class="table table-sm table-striped">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Display</th>
                                <th>Supervisor</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(dept, key) in departments" :key="dept.id">
                                <td>{{ dept.id }}</td>
                                <td>{{ dept.name }}</td>
                                <td>{{ dept.display_name }}</td>
                                <th>{{ dept.employee.first_name }} {{ dept.employee.last_name }}</th>
                                <td>
                                    <button @click="editDepartment(dept, key)" class="btn btn-primary btn-xs mr-1">
                                        <i class="fas fa-edit"></i></button>
                                    <button @click="deleteDepartment(dept.id, key)" class="btn btn-danger btn-xs mr-1">
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
import { SettingDepartmentWithEmployeeTypes, useSettingDepartmentStore } from '@/store/superadmin/settings/department'
import { useUserStore } from '@/store/superadmin/user';
import { computed, defineComponent, onBeforeMount, reactive, ref } from 'vue'

export default defineComponent({
    setup() {
        const user = useUserStore();
        const department = useSettingDepartmentStore();
        
        const departments = computed(() => department.getAllDepartments);
        const supervisors = computed(() => user.getSupervisorUsers);
        
        const selectedKey = ref(0);
        const isEdit = ref(false);
        const departmentForm = reactive({
            id: 0,
            name: '',
            display_name: '',
            supervisor_id: 0
        });

        onBeforeMount(async () => {
            await department.loadAllDepartment();
            await user.loadAllPortalUsers();
        })

        const addDepartment = async () => {
            await department.addDepartment(departmentForm);
        }

        const editDepartment = (data : SettingDepartmentWithEmployeeTypes, key : number) => {
            departmentForm.id = data.id;
            departmentForm.name = data.name;
            departmentForm.display_name = data.display_name;
            departmentForm.supervisor_id = data.supervisor_id;

            selectedKey.value = key;
            isEdit.value = true;
        }

        const updateDepartment = async () => {
            await department.updateDepartment(departmentForm, selectedKey.value)
        }

        const deleteDepartment = async (deptId : number, key : number) => {
            let p = confirm('Delete this department?');
            if(p)
            await department.deleteDepartment(deptId, key);
        }

        const cancelDepartment = () => {
            isEdit.value = false;
        }

        return {
            departmentForm,
            departments,
            supervisors,
            isEdit,
            addDepartment,
            editDepartment,
            updateDepartment,
            deleteDepartment,
            cancelDepartment
        }
    },
})
</script>
