import http from "@/http-common";
import { defineStore } from "pinia";
import { EmployeePersonalTypes } from "../employee/personal";

export interface SuperadminLeaveTypes {
    id: number,
    type: string,
    pay_type: string,
    from: string,
    to: string,
    time_from: string,
    time_to: string,
    reason: string,
    count: number,
    recommending_approval: string,
    final_approval: string,
    created_at: string,
    updated_at: string,
    employee: EmployeePersonalTypes
}

export const useSuperadminLeaveStore = defineStore({
    id: 'superadmin_leave',
    state: () => ({
        leaves: [] as SuperadminLeaveTypes[],
        isRequestLoading: false
    }),
    getters: {
        getAllFiledLeaves() : SuperadminLeaveTypes[] {
            return this.leaves;
        }
    },
    actions: {
        async loadAllLeaves() : Promise<void> {
            if(this.leaves.length == 0) {
                this.isRequestLoading = true;
                const response = await http.get('/api/sa/leaves')
                this.leaves = response.data.data;
                this.isRequestLoading = false;
            }
        },
        async changeRecommendingApprovalStatusTo(value : SuperadminLeaveTypes, key : number) : Promise<void> {
            this.isRequestLoading = true;
            const response = await http.patch(`/api/sa/leaves/${value.id}`, value);
            this.leaves.splice(key, 1, response.data.data);
            this.isRequestLoading = false;
        },
        async changeFinalApprovalStatusTo(value : SuperadminLeaveTypes, key : number) : Promise<void> {
            this.isRequestLoading = true;
            const response = await http.patch(`/api/sa/leaves/${value.id}`, value);
            this.leaves.splice(key, 1, response.data.data);
            this.isRequestLoading = false;
        },
        async deleteLeave(id : number, key : number) : Promise<void> {
            this.isRequestLoading = true;
            await http.delete(`/api/sa/leaves/${id}`);
            this.leaves.splice(key, 1);
            this.isRequestLoading = false;
        }
    }
});