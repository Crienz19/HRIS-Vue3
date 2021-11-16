import http from "@/http-common";
import { EmployeePersonalTypes } from "@/store/employee/personal";
import { defineStore } from "pinia";

export interface SettingDepartmentTypes {
    id: number,
    name: string,
    display_name: string,
    supervisor_id: number,
    created_at: string
}

export interface SettingDepartmentWithEmployeeTypes {
    id: number,
    name: string,
    display_name: string,
    supervisor_id: number,
    created_at: string,
    employee: EmployeePersonalTypes
}

export const useSettingDepartmentStore = defineStore({
    id: 'superadmin_settings_department',
    state: () => ({
        departments: [] as SettingDepartmentWithEmployeeTypes[]
    }),
    getters: {
        getAllDepartments() : SettingDepartmentWithEmployeeTypes[] {
            return this.departments;
        }
    },
    actions: {
        async loadAllDepartment() {
            if(this.departments.length == 0) {
                const response = await http.get('/api/sa/departments');
                this.departments = response.data;
            }
        },
        async addDepartment(data : any) : Promise<void> {
            const response = await http.post('/api/sa/departments', data);
            this.departments.unshift(response.data);
        },
        async updateDepartment(data : any, key : number) : Promise<void> {
            const response = await http.patch(`/api/sa/departments/${data.id}`, data);
            this.departments.splice(key, 1, response.data)
        },
        async deleteDepartment(id: number, key: number) : Promise<void> {
            await http.delete(`/api/sa/departments/${id}`);
            this.departments.splice(key, 1);
        }
    }
})