<template>
    <div class="alert alert-primary">
        <b>Registered User</b>
    </div>
    <div class="card">
        <div class="card-header">
            <h3 class="card-title"><b>Registered Users</b></h3>

            <div class="card-tools">
                <div class="input-group input-group-sm" style="width: 150px;">
                <input v-model="userSearch" type="text" name="table_search" class="form-control float-right" placeholder="Search by email">

                    <!-- <div class="input-group-append">
                        <button @click="searchUser()" type="submit" class="btn btn-default">
                            <i class="fas fa-search"></i>
                        </button>
                    </div> -->
                </div>
            </div>
        </div>
        <!-- /.card-header -->
        <div class="card-body table-responsive p-0" style="height: 70vh;">
            <table class="table table-head-fixed text-nowrap1 table-striped text-sm">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Username</th>
                        <th>Email Address</th>
                        <th>Role</th>
                        <th>Is Activated</th>
                        <th>Is Filled</th>
                        <th>Created At</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody v-if="usersIsLoading">
                    <tr>
                        <td colspan="8" class="text-center">
                            <i class="fas fa fa-spinner fa-pulse fa-2x"></i>
                        </td>
                    </tr>
                </tbody>
                <tbody v-else>
                    <template v-if="registeredUsers.length > 0">
                        <tr v-for="(user, key) in registeredUsers" :key="user.id">
                            <td>{{ user.id }}</td>
                            <td>{{ user.name }}</td>
                            <td>{{ user.email }}</td>
                            <td>
                                <select @change="setUserRole(user.id, $event.target.value, key)" class="form-control form-control-xs">
                                    <option selected>{{ user.role }}</option>
                                    <option v-for="role in registeredRole" :key="role.id" :value="role.name">{{ role.display_name }}</option>
                                </select>
                            </td>
                            <td>
                                <i v-if="user.isActivated" class="fas fa-check text-success"></i>
                                <i v-else class="fas fa-times text-danger"></i>
                            </td>
                            <td>
                                <i v-if="user.isFilled" class="fas fa-check text-success"></i>
                                <i v-else class="fas fa-times text-danger"></i>
                            </td>
                            <td>{{ user.created_at }}</td>
                            <td>
                                <button v-if="user.employee" @click="selectThisUser(user)" data-toggle="modal" data-target="#modal-personal" class="btn btn-success btn-xs mr-1">
                                    <i class="fas fa-search"></i></button>
                                <button @click="setToDefaultPassword(user.id)" class="btn btn-warning btn-xs mr-1">
                                    <i class="fas fa-redo"></i></button>
                                <button @click="selectThisCredit(user?.credits)" data-toggle="modal" data-target="#modal-leave-credits" class="btn btn-primary btn-xs mr-1">
                                    <i class="fas fa-list-alt"></i></button>
                                <button v-if="user.isActivated == false" @click="setUserToActive(user.id, key)" class="btn btn-success btn-xs mr-1">
                                    <i class="fas fa-unlock"></i></button>
                                <button v-if="user.isActivated == true" @click="setUserToInactive(user.id, key)" class="btn btn-danger btn-xs mr-1">
                                    <i class="fas fa-lock"></i></button>
                            </td>
                        </tr>
                    </template>
                    <template v-else>
                        <tr>
                            <td colspan="8" class="text-center">No user to display</td>
                        </tr>
                    </template>
                </tbody>
            </table>
        </div>
        <!-- /.card-body -->
    </div>

    <div class="modal fade show" id="modal-leave-credits" aria-modal="true" role="dialog">
        <div class="modal-dialog modal-md modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title">Setting leave credits</h4>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="form-group col-6">
                            <label>VL</label>
                            <input v-model="toBeUpdatedCredits.VL" type="text" class="form-control form-control-xs">
                        </div>
                        <div class="form-group col-6">
                            <label>Total VL</label>
                            <input v-model="toBeUpdatedCredits.total_VL" type="text" class="form-control form-control-xs">
                        </div>

                        <div class="form-group col-6">
                            <label>SL</label>
                            <input v-model="toBeUpdatedCredits.SL" type="text" class="form-control form-control-xs">
                        </div>
                        <div class="form-group col-6">
                            <label>Total SL</label>
                            <input v-model="toBeUpdatedCredits.total_SL" type="text" class="form-control form-control-xs">
                        </div>

                        <div class="form-group col-6">
                            <label>PTO</label>
                            <input v-model="toBeUpdatedCredits.PTO" type="text" class="form-control form-control-xs">
                        </div>
                        <div class="form-group col-6">
                            <label>Total PTO</label>
                            <input v-model="toBeUpdatedCredits.total_PTO" type="text" class="form-control form-control-xs">
                        </div>

                        <div class="form-group col-6">
                            <label>Special Leave</label>
                            <input v-model="toBeUpdatedCredits.special_leave" type="text" class="form-control form-control-xs">
                        </div>
                        <div class="form-group col-6">
                            <label>Total Special Leave</label>
                            <input v-model="toBeUpdatedCredits.total_special_leave" type="text" class="form-control form-control-xs">
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button @click="setLeaveCredits()" class="btn btn-primary btn-sm btn-block">Update</button>
                </div>
            </div>
            <!-- /.modal-content -->
        </div>
        <!-- /.modal-dialog -->
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
                                    <img :src="selectedUser?.profile_image" alt="User image" style="width: 100%; height: 200;">
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
                                                <td>{{ selectedUser?.employee.first_name }}</td>
                                            </tr>
                                            <tr>
                                                <td>Middle Name</td>
                                                <td>{{ selectedUser?.employee.middle_name }}</td>
                                            </tr>
                                            <tr>
                                                <td>Last Name</td>
                                                <td>{{ selectedUser?.employee.last_name }}</td>
                                            </tr>
                                            <tr>
                                                <td>E-mail address</td>
                                                <td>{{ selectedUser?.email }}</td>
                                            </tr>
                                            <tr>
                                                <td>Birth Date</td>
                                                <td>{{ selectedUser?.employee.birth_date }}</td>
                                            </tr>
                                            <tr>
                                                <td>Civil Status</td>
                                                <td>{{ selectedUser?.employee.civil_status }}</td>
                                            </tr>
                                            <tr>
                                                <td>Contact #1</td>
                                                <td>{{ selectedUser?.employee.contact_no_1 }}</td>
                                            </tr>
                                            <tr>
                                                <td>Contact #2</td>
                                                <td>{{ selectedUser?.employee.contact_no_2 }}</td>
                                            </tr>
                                            <tr>
                                                <td>Present Address</td>
                                                <td>{{ selectedUser?.employee.present_address }}</td>
                                            </tr>
                                            <tr>
                                                <td>Permanent Address</td>
                                                <td>{{ selectedUser?.employee.permanent_address }}</td>
                                            </tr>
                                            <tr>
                                                <td>SSS Number</td>
                                                <td>{{ selectedUser?.employee.sss }}</td>
                                            </tr>
                                            <tr>
                                                <td>PAGIBIG ID</td>
                                                <td>{{ selectedUser?.employee.pagibig }}</td>
                                            </tr>
                                            <tr>
                                                <td>PhilHealth ID</td>
                                                <td>{{ selectedUser?.employee.philhealth }}</td>
                                            </tr>
                                            <tr>
                                                <td>TIN</td>
                                                <td>{{ selectedUser?.employee.tin }}</td>
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
                                                <td>{{ selectedUser?.employee.employee_id }}</td>
                                            </tr>
                                            <tr>
                                                <td>Date Hired</td>
                                                <td>{{ selectedUser?.employee.date_hired }}</td>
                                            </tr>
                                            <tr>
                                                <td>Branch</td>
                                                <td>{{ selectedUser?.employee.branch.display_name }}</td>
                                            </tr>
                                            <tr>
                                                <td>Skype ID</td>
                                                <td>{{ selectedUser?.employee.skype_id }}</td>
                                            </tr>
                                            <tr>
                                                <td>Department</td>
                                                <td>{{ selectedUser?.employee.department.display_name }}</td>
                                            </tr>
                                            <tr>
                                                <td>Designation</td>
                                                <td>{{ selectedUser?.employee.position }}</td>
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
                                                <td>Skype ID</td>
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
import { UserCreditTypes, UserEmployeeTypes, useUserStore } from '@/store/superadmin/user'
import { useSettingRoleStore } from '@/store/superadmin/settings/role'

export default defineComponent({
    setup() {
        const user = useUserStore()
        const role = useSettingRoleStore();

        const userSearch = ref("");

        const usersIsLoading = computed(() => user.getDataIsLoading);
        const registeredRole = computed(() => role.getAllRoles);
        const registeredUsers = computed(() => {
            return user.getRegisteredUsers.filter((user) => {
                return (user.email.toLowerCase().match(userSearch.value))
            });
        });

        const selectedUser = ref<UserEmployeeTypes>();
        const toBeUpdatedCredits = ref<UserCreditTypes>({
            id: 0,
            user_id: 0,
            VL: 0,
            total_VL: 0,
            SL: 0,
            total_SL: 0,
            OB: 0,
            OT: 0,
            PTO: 0,
            total_PTO: 0,
            special_leave: 0,
            total_special_leave: 0
        });


        onBeforeMount(async () => {
            await user.loadAllPortalUsers();
            await role.loadAllRoles();
        })

        const selectThisUser = (user : UserEmployeeTypes) => {
            selectedUser.value = user;
        }

        const selectThisCredit = (credit : UserCreditTypes) => {
            toBeUpdatedCredits.value = credit;
        }

        const setToDefaultPassword = async (userId : number) => {
            let conf = confirm('Set this user password to default?');
            if(conf)
            await user.resetSelectUserPassword(userId);
        }

        const setLeaveCredits = async () => {
            await user.updateLeaveCredits(toBeUpdatedCredits.value.user_id, toBeUpdatedCredits.value)
        }

        const setUserToActive = async (userId : number, key : number) => {
            let conf = confirm('Set this user to active?');
            if(conf)
            await user.setUserActive(userId, true, key)
        }

        const setUserToInactive = async (userId : number, key : number) => {
            let conf = confirm('Set this user to inactive?');
            if(conf)
            await user.setUserActive(userId, false, key)
        }

        const setUserRole = async (userId : number, value : string, key : number) => {
            await user.setUserRole(userId, value, key);
        }

        const searchUser = async () => {
            await user.searchByEmail(userSearch.value);
        }

        return {
            selectThisUser,
            selectThisCredit,
            setToDefaultPassword,
            setLeaveCredits,
            setUserToActive,
            setUserToInactive,
            setUserRole,
            searchUser,
            userSearch,
            usersIsLoading,
            toBeUpdatedCredits,
            selectedUser,
            registeredUsers,
            registeredRole
        }
    },
})
</script>
