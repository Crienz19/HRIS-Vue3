import http from "@/http-common";
import { AxiosError } from "axios";
import { defineStore } from "pinia";

export interface SettingRoleTypes {
    id: number,
    name: string,
    display_name: string,
    created_at: string
}

export const useSettingRoleStore = defineStore({
    id: 'superadmin_settings_role',
    state: () => ({
        roles: [] as SettingRoleTypes[],
        errors: [] 
    }),
    getters: {
        getAllRoles() : SettingRoleTypes[] {
            return this.roles;
        },
        getAllErrors() : any {
            return this.errors;
        }
    },
    actions: {
        async loadAllRoles() : Promise<void> {
            if(this.roles.length == 0) {
                const response = await http.get('/api/sa/roles');
                this.roles = response.data;
            }
        },
        async addRole(data : any) : Promise<void> {
            try {
                const response = await http.post('/api/sa/roles', data);
                this.roles.unshift(response.data);
                this.errors = [];
            } catch (error) {
                this.errors = (error as AxiosError).response?.data.errors
            }
        },
        async updateRole(data : any, key : number) : Promise<void> {
            try {
                const response = await http.patch(`/api/sa/roles/${data.id}`, data);
                this.roles.splice(key, 1, response.data);
                this.errors = [];
            } catch (error) {
                this.errors = (error as AxiosError).response?.data.errors;
            }
        },
        async deleteRole(id : number, key : number) : Promise<void> {
            try {
                await http.delete(`/api/sa/roles/${id}`);
                this.roles.splice(key, 1);
                this.errors = [];
            } catch (error) {
                this.errors = (error as AxiosError).response?.data.errors;
            }
        }
    }
})