import http from "@/http-common";
import { defineStore } from "pinia";

export interface SettingBranchTypes {
    id: number,
    name: string,
    display_name: string,
    created_at: string
}

export const useSettingBranchStore = defineStore({
    id: 'superadmin_settings_branch',
    state: () => ({
        branches: [] as SettingBranchTypes[]
    }),
    getters: {
        getAllBranch() : SettingBranchTypes[] {
            return this.branches;
        }
    },
    actions: {
        async loadAllBranches() : Promise<void> {
            if(this.branches.length == 0) {
                const response = await http.get('/api/sa/branches');
                this.branches = response.data;
            }
        },
        async addBranch(data : any) : Promise<void> {
            const response = await http.post('/api/sa/branches', data);
            this.branches.unshift(response.data);
        },
        async updateBranch(data : SettingBranchTypes, key : number) : Promise<void> {
            await http.patch(`/api/sa/branches/${data.id}`, data);
            this.branches.splice(key, 1, data);
        },
        async deleteBranch(id : number, key : number) : Promise<void> {
            await http.delete(`/api/sa/branches/${id}`);
            this.branches.splice(key, 1);
        }
    }
})