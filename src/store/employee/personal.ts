import http from "@/http-common";
import { ErrorTypes } from "@/types/error.types";
import { AxiosError } from "axios";
import { defineStore } from "pinia";
import { SettingBranchTypes } from "../superadmin/settings/branch";
import { SettingDepartmentTypes } from "../superadmin/settings/department";
import { UserCreditTypes } from "../superadmin/user";

export interface EmployeePersonalTypes {
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
    updated_at: string
}

export interface EmployeeWithBranchAndDepartmentTypes {
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
    branch: SettingBranchTypes
}

export interface EmployeeWithBranchAndDepartmentAndCreditTypes {
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
    credits: UserCreditTypes
}

export const usePersonalStore = defineStore({
    id: 'employee_personal',
    state: () => ({
        personal: {} as EmployeeWithBranchAndDepartmentAndCreditTypes,
        isRequestLoading: false,
        errorBag: {} as ErrorTypes
    }),
    getters: {
        getAllPersonalDetails() : EmployeeWithBranchAndDepartmentAndCreditTypes {
            return this.personal
        },
        getErrors() : any {
            if (this.errorBag.errors) {
                return this.errorBag.errors;
            } 

            return false;
        }
    },
    actions: {
        async loadPersonalDetails() : Promise<void> {
            if (Object.entries(this.personal).length == 0) { 
                this.isRequestLoading = true;
                const response = await http.get('/api/getUserPersonalDetails');
                this.personal = response.data;
                this.isRequestLoading = false;
            }
        },
        async registerPersonalDetails(data : any) : Promise<void> {
            try {
                this.isRequestLoading = true;
                await http.post('api/em/employees', data);
                this.isRequestLoading = false;
                this.errorBag = {
                    errors: {},
                    message: ''
                };
            } catch (error) {
                this.errorBag = (error as AxiosError).response?.data;
                this.isRequestLoading = false;
                throw new Error();
            }
        },
        async updatePersonalDetails(data : any) : Promise<void> {
            const resposne = await http.patch(`/api/em/employees/${data.user_id}`, data);
        },
    }
})