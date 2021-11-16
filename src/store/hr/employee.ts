import http from "@/http-common";
import { defineStore } from "pinia";
import { UserTypes } from "../auth";
import { SettingBranchTypes } from "../superadmin/settings/branch";
import { SettingDepartmentTypes } from "../superadmin/settings/department";
import { UserCreditTypes } from "../superadmin/user";

export interface HumanResourceEmployeeTypes {
    id: number,
    user_id: number,
    first_name: string,
    middle_name: string,
    last_name: string,
    birth_date: string,
    civil_status: string,
    present_address: string,
    permanent_address: string,
    contact_no_1: string,
    contact_no_2: string,
    tin: string,
    sss: string,
    pagibig: string,
    philhealth: string,
    branch_id: number,
    skype_id: string,
    department_id: number,
    position: string,
    employee_id: string,
    date_hired: string,
    created_at: string,
    updated_at: string,
    department: SettingDepartmentTypes,
    branch: SettingBranchTypes,
    credits: UserCreditTypes,
    user: UserTypes
}

export const useHumanResourceEmployeeStore = defineStore({
    id: 'hr_employee',
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