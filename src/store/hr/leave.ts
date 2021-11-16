import http from "@/http-common";
import { defineStore } from "pinia";
import { SuperadminLeaveTypes } from "../superadmin/leave";
import { SupervisorLeaveTypes } from "../supervisor/leave";

export const useHumanResourceLeaveStore = defineStore({
    id: 'hr_leaves',
    state: () => ({
        leaves: [] as SuperadminLeaveTypes[],
        isRequestLoading: false
    }),
    getters: {
        getRecommendedLeaves() : SupervisorLeaveTypes[] {
            return this.leaves;
        }
    },
    actions: {
        async loadRecommendedLeaves() : Promise<void> {
            if (this.leaves.length == 0) {
                this.isRequestLoading = true;
                const response = await http.get('/api/hr/leaves');
                this.leaves = response.data.data;
                this.isRequestLoading = false;
            }
        },
        async approveFinalApproval(requestId : number, key : number) : Promise<void> {
            this.isRequestLoading = true;
            const response = await http.patch(`/api/hr/leaves/${requestId}/approved`);
            this.leaves.splice(key, 1, response.data.data);
            this.isRequestLoading = false;
        },
        async disapproveFinalApproval(requestId : number, key : number) : Promise<void> {
            this.isRequestLoading = true;
            const response = await http.patch(`/api/hr/leaves/${requestId}/disapproved`);
            this.leaves.splice(key, 1, response.data.data);
            this.isRequestLoading = false;
        }
    }
})