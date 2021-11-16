import http from "@/http-common";
import { defineStore } from "pinia";
import { SuperadminOvertimeTypes } from "../superadmin/overtime";

export const useAdminEmpOvertimeStore = defineStore({
    id: 'admin_employee_overtime',
    state: () => ({
        overtimes: [] as SuperadminOvertimeTypes[],
        isRequestLoading: false
    }),
    getters: {
        getAllOvertimeRequest() : SuperadminOvertimeTypes[] {
            return this.overtimes;
        }
    },
    actions: {
        async loadAllEmployeeOvertime() : Promise<void> {
            if (this.overtimes.length == 0) {
                this.isRequestLoading = true;
                const response = await http.get('/api/admin/overtimes/getEmployee');
                this.overtimes = response.data.data;
                this.isRequestLoading = false;
            }
        }
    }
})