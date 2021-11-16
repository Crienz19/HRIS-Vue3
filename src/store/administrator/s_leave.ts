import http from "@/http-common";
import { defineStore } from "pinia";
import { SuperadminLeaveTypes } from "../superadmin/leave";

export const useAdminSvLeaveStore = defineStore({
    id: 'admin_supervisor_leave',
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
        async loadAllSupervisorRequest() : Promise<void> {
            if (this.leaves.length == 0) {
                this.isRequestLoading = true;
                const response = await http.get('/api/admin/leaves/getSupervisor');
                this.leaves = response.data.data;
                this.isRequestLoading = false;
            }
        },
        async approveSelectedLeave(requestId : number, key : number) : Promise<void> {
            const response = await http.patch(`/api/admin/leaves/${requestId}/approved`);
            this.leaves.splice(key, 1, response.data.data);
        },
        async disapproveSelectedLeave(requestId : number, key : number) : Promise<void> {
            console.log(requestId, key);
        }
    }
})