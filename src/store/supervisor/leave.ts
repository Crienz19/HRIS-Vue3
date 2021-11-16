import http from "@/http-common";
import { defineStore } from "pinia";
import { EmployeePersonalTypes } from "../employee/personal";

export interface SupervisorLeaveTypes {
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

export const useSupervisorLeaveStore = defineStore({
    id: 'supervisor_leave',
    state: () => ({
        leaves: [] as SupervisorLeaveTypes[],
        isRequestLoading: false
    }),
    getters: {
        getSubsLeave () : SupervisorLeaveTypes[] {
            return this.leaves;
        }
    },
    actions: {
        async loadSubsLeave () : Promise<void> {
            if (this.leaves.length == 0) {
                try {
                    this.isRequestLoading = true;
                    const response = await http.get('/api/sv/leaves');
                    this.leaves = response.data.data;
                    this.isRequestLoading = false;
                } catch (error) {
                    console.log(error);
                    this.isRequestLoading = false;
                    throw new Error();
                }
            }
        },
        async approveSelectedLeave (requestId : number, key : number) : Promise<void> {
            try {
                this.isRequestLoading = true;
                const response = await http.patch(`/api/sv/leaves/${requestId}/approved`);
                this.leaves.splice(key, 1, response.data.data);
                this.isRequestLoading = false;
            } catch (error) {
                this.isRequestLoading = false;
                throw new Error();
            }
        },
        async disapproveSelectedLeave (requestId : number, key : number) : Promise<void> {
            try {
                this.isRequestLoading = true;
                const response = await http.patch(`/api/sv/leaves/${requestId}/disapproved`);
                this.leaves.splice(key, 1, response.data.data);            
                this.isRequestLoading = false;
            } catch (error) {
                this.isRequestLoading = false;
                throw new Error();
            }
        }
    }
})