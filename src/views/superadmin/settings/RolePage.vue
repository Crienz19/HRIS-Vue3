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
                        Roles
                    </h3>
                </div>
                <div class="card-body">
                    <div class="form-group">
                        <label>Name</label>
                        <input v-model="roleForm.name" type="text" class="form-control form-control-sm" placeholder="sample">
                        <i v-if="errors.hasOwnProperty('name')" class="text-red text-xs">{{ errors['name'][0] }}</i>
                    </div>
                    <div class="form-group">
                        <label>Display Name</label>
                        <input v-model="roleForm.display_name" type="text" class="form-control form-control-sm" placeholder="sample name">
                        <i v-if="errors.hasOwnProperty('display_name')" class="text-red text-xs">{{ errors['display_name'][0] }}</i>
                    </div>
                    <div class="form-group">
                        <template v-if="!isEdit">
                            <button @click="addRole()" class="btn btn-primary btn-sm">Add</button>
                        </template>

                        <template v-else>
                            <button @click="updateRole()" class="btn btn-success btn-sm mr-1">Update</button>
                            <button @click="cancelRole()" class="btn btn-danger btn-sm">Cancel</button>
                        </template>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-9">
            <div class="card">
                <div class="card-header">
                    <h3 class="card-title">Role List</h3>
                </div>
                <div class="card-body p-0">
                    <table class="table table-sm table-striped">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Display</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(role, key) in roles" :key="role.id">
                                <td>{{ role.id }}</td>
                                <td>{{ role.name }}</td>
                                <td>{{ role.display_name }}</td>
                                <td>
                                    <button @click="editRole(role, key)" class="btn btn-primary btn-xs mr-1">
                                        <i class="fas fa-edit"></i></button>
                                    <button @click="deleteRole(role.id, key)" class="btn btn-danger btn-xs mr-1">
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
import { SettingRoleTypes, useSettingRoleStore } from '@/store/superadmin/settings/role'
import { computed, defineComponent, onMounted, reactive, ref } from 'vue'

export default defineComponent({
    setup() {
        const role = useSettingRoleStore();
        const roles = computed(() => role.getAllRoles);
        const errors = computed(() => role.getAllErrors);

        const isEdit = ref(false);
        const selectedKey = ref(0);
        const roleForm = reactive({
            id: 0,
            name: '',
            display_name: ''
        });

        onMounted(async () => {
            await role.loadAllRoles();
        })

        const addRole = async () => {
            await role.addRole(roleForm);
        }

        const editRole = (data : SettingRoleTypes, key : number) => {
            roleForm.id = data.id;
            roleForm.name = data.name;
            roleForm.display_name = data.display_name;

            selectedKey.value = key;
            isEdit.value = true;
        }

        const updateRole = async () => {
            await role.updateRole(roleForm, selectedKey.value);
        }

        const deleteRole = async (roleId : number, key : number) => {
            let p = confirm('Delete this role?');
            if(p)
            await role.deleteRole(roleId, key);
        }

        const cancelRole = () => {
            isEdit.value = false;
        }

        return {
            roles,
            roleForm,
            isEdit,
            errors,
            addRole,
            editRole,
            updateRole,
            deleteRole,
            cancelRole
        }
    },
})
</script>
