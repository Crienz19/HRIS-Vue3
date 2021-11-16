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
                        Branches
                    </h3>
                </div>
                <div class="card-body">
                    <div class="form-group">
                        <label>Name</label>
                        <input v-model="branchForm.name" type="text" class="form-control form-control-sm">
                    </div>
                    <div class="form-group">
                        <label>Display Name</label>
                        <input v-model="branchForm.display_name" type="text" class="form-control form-control-sm">
                    </div>
                    <div class="form-group">
                        <template v-if="!isEdit">
                            <button @click="addBranch()" class="btn btn-primary btn-sm">Add</button>
                        </template>
                        <template v-else>
                            <button @click="updateBranch()" class="btn btn-success btn-sm mr-1">Update</button>
                            <button @click="cancelBranch()" class="btn btn-danger btn-sm">Cancel</button>
                        </template>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-9">
            <div class="card">
                <div class="card-header">
                    <h3 class="card-title">Branch List</h3>
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
                            <tr v-for="(branch, key) in branches" :key="branch.id">
                                <td>{{ branch.id }}</td>
                                <td>{{ branch.name }}</td>
                                <td>{{ branch.display_name }}</td>
                                <td>
                                    <button @click="editBranch(branch, key)" class="btn btn-primary btn-xs mr-1">
                                        <i class="fas fa-edit"></i></button>
                                    <button @click="deleteBranch(branch.id, key)" class="btn btn-danger btn-xs mr-1">
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
import { SettingBranchTypes, useSettingBranchStore } from '@/store/superadmin/settings/branch'
import { computed, defineComponent, onBeforeMount, reactive, ref } from 'vue'

export default defineComponent({
    setup() {
        const branch = useSettingBranchStore();
        const branches = computed(() => branch.getAllBranch)
        
        const branchForm = reactive({
            id: 0,
            name: '',
            display_name: '',
            created_at: ''
        });
        const isEdit = ref(false);
        const selectedKey = ref(0);

        onBeforeMount(async () => {
            await branch.loadAllBranches();
        })
        
        const addBranch = async () => {
            await branch.addBranch(branchForm);
            cancelBranch();
        }

        const editBranch = (data : SettingBranchTypes, key : number) => {
            branchForm.id = data.id;
            branchForm.name = data.name;
            branchForm.display_name = data.display_name;
            branchForm.created_at = data.created_at;
            isEdit.value = true;
            selectedKey.value = key;
        }

        const updateBranch = async () => {
            await branch.updateBranch(branchForm, selectedKey.value);
            branchForm.name = '';
            branchForm.display_name = '';
        }

        const deleteBranch = async (branchId : number, branchKey : number) => {
            let p = confirm('Delete this branch?');
            if(p)
            await branch.deleteBranch(branchId, branchKey);
        }

        const cancelBranch = () => {
            branchForm.id = 0;
            branchForm.name = '';
            branchForm.display_name = '';
            branchForm.created_at = ''
            isEdit.value = false;
        }

        return {
            isEdit,
            branches,
            branchForm,
            addBranch,
            editBranch,
            updateBranch,
            deleteBranch,
            cancelBranch
        }
    },
})
</script>
