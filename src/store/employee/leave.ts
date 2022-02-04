import { defineStore } from "pinia";
import http from '@/http-common';

export interface EmployeeLeaveTypes {
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
    create_at: string,
    updated_at: string
}

export const useEmployeeLeaveStore = defineStore({
    id: 'employee_leave',
    state: () => ({
        leaves: [] as EmployeeLeaveTypes[],
        selected_id: 0,
        active_component: 'leave-request-component',
        isRequestLoading: false
    }),
    getters: {
        getAllRequests() : EmployeeLeaveTypes[] {
            return this.leaves;
        },
        getLeavesCount() : number {
            return this.leaves.length;
        },
        getActiveComponent() : string {
            return this.active_component;
        },
        getSelectedRequest(): EmployeeLeaveTypes | undefined {
            return this.leaves.find(e => e.id == this.selected_id);
        }
    },
    actions: {
        async loadEmployeeLeaveRequests() : Promise<void> {
            if(this.leaves.length == 0) {
                this.isRequestLoading = true;
                const response = await http.get('/api/em/leaves');
                this.leaves = response.data.data;
                this.isRequestLoading = false;
            }
        },
        async setComponentTo(component: string) : Promise<void> {
            this.active_component = component;
        },
        async setSelectedRequest(request_id: number): Promise<void> {
            this.selected_id = request_id;
        },
        async addEmployeeLeaveRequest(data: any) {
            this.isRequestLoading = true;
            const response = await http.post('/api/em/leaves', data);
            this.leaves.unshift(response.data);
            this.isRequestLoading = false;
        },
        async updateEmployeeLeaveRequest(data: any, id?: number) {
            this.isRequestLoading = true;
            const response = await http.patch(`/api/em/leaves/${id}`, data);
            this.isRequestLoading = false;
        },
        async deleteEmployeeLeaveRequest(id: number, key: number) {
            this.isRequestLoading = true;
            await http.delete(`/api/em/leaves/${id}`);
            this.leaves.splice(key, 1);
            this.isRequestLoading = false;
        }
    }
});