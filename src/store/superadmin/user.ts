import http from "@/http-common";
import { defineStore } from "pinia";
import { EmployeeWithBranchAndDepartmentTypes } from "../employee/personal";

export interface UserCreditTypes {
    id: number,
    user_id: number,
    VL: number,
    total_VL: number,
    SL: number,
    total_SL: number,
    OB: number,
    OT: number,
    PTO: number,
    total_PTO: number
    special_leave: number,
    total_special_leave: number
}

export interface UserEmployeeTypes {
    id: number,
    name: string,
    email: string,
    role: string,
    isActivated: boolean,
    isFilled: boolean,
    profile_image: string,
    created_at: string,
    updated_at: string,
    employee: EmployeeWithBranchAndDepartmentTypes,
    credits: UserCreditTypes
}

export const useUserStore = defineStore({
    id: 'superadmin_users',
    state: () => ({
        users: [] as UserEmployeeTypes[],
        isLoading: false
    }),
    getters: {
        getRegisteredUsers() : UserEmployeeTypes[] {
            return this.users;
        },
        getSupervisorUsers() : UserEmployeeTypes[] {
            return this.users.filter(e => e.role == 'supervisor');
        },
        getDataIsLoading() : boolean {
            return this.isLoading;
        }
    },
    actions: {
        async searchByEmail(email: string) : Promise<void> {
            await this.users.filter(e => e.email == email)
        },
        async loadAllPortalUsers() : Promise<void> {
            if(this.users.length == 0) {
                this.isLoading = true;
                const response = await http.get('/api/sa/users');
                this.users = response.data;
                this.isLoading = false;
            }
        },
        async resetSelectUserPassword(userId: number) : Promise<void> {
            await http.post(`/api/sa/users/setToDefault/${userId}`);
        },
        async setUserActive(userId : number, isActive : boolean, key : number) : Promise<void> {
            const response = await http.patch(`/api/users/${userId}`, { isActivated: isActive });
            this.users.splice(key, 1, response.data)
        },
        async setUserRole(userId: number, value : string, key: number) : Promise<void> {
            const response = await http.patch(`/api/users/${userId}`, { role : value });
            this.users.splice(key, 1, response.data);
        },
        async updateLeaveCredits(userId : number, value : UserCreditTypes) : Promise<void> {
            try {
                const response = await http.patch(`/api/sa/credits/${userId}`, value);
            } catch (error) {
                console.log(error);
            }
        }
    }
})