import http from "@/http-common";
import { defineStore } from "pinia";
import { SuperadminLeaveTypes } from "../superadmin/leave";

export const useAdminEmpLeaveStore = defineStore({
    id: 'admin_employee_leave',
    state: () => ({
        leaves: [] as SuperadminLeaveTypes[],
        isRequestLoading: false
    }),
    getters: {
        getAllLeaveRequest() : SuperadminLeaveTypes[] {
            return this.leaves;
        }
    },
    actions: {
        async loadAllEmployeeLeaveRequest() : Promise<void> {
            if (this.leaves.length == 0) {
                this.isRequestLoading = true;
                const response = await http.get('/api/admin/leaves/getEmployee');
                this.leaves = response.data.data;
                this.isRequestLoading = false;
            }
        }
    }
})