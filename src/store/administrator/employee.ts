import http from "@/http-common";
import { defineStore } from "pinia";
import { HumanResourceEmployeeTypes } from "../hr/employee";

export const useAdminEmployeeStore = defineStore({
    id: 'admin_employee',
    state: () => ({
        employees: [] as HumanResourceEmployeeTypes[],
        isRequestLoading: false
    }),
    getters: {
        getAllEmployees () : HumanResourceEmployeeTypes[] {
            return this.employees;
        }
    },
    actions: {
        async loadAllEmployees() {
            if (this.employees.length == 0) {
                this.isRequestLoading = true;
                const response = await http.get('/api/hr/employees')
                this.employees = response.data;
                this.isRequestLoading = false;
            }
        },
        async reloadAllEmployees() {
            this.isRequestLoading = true;
            const response = await http.get('/api/hr/employees');
            this.employees = response.data;
            this.isRequestLoading = false;
        }
    }
});