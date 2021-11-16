import { defineStore } from "pinia";
import http from "@/http-common";

export interface EmployeeOvertimeTypes {
    id: number,
    date: string,
    from: string,
    to: string,
    reason: string,
    status: string,
    created_at: string
}

export const useEmployeeOvertimeStore = defineStore({
    id: 'employee_overtime',
    state: () => ({
        overtimes: [] as EmployeeOvertimeTypes[],
        selected_id: 0,
        active_component: 'overtime-request-component',
        isRequestLoading: false
    }),
    getters: {
        getAllRequests() : EmployeeOvertimeTypes[] {
            return this.overtimes;
        },
        getOvertimeCount() : number {
            return this.overtimes.length;
        },
        getSelectedRequest(): EmployeeOvertimeTypes | undefined {
            return this.overtimes.find(e => e.id == this.selected_id);
        }
    },
    actions: {
        async loadEmployeeOvertimeRequests() : Promise<void> {
            if(this.overtimes.length == 0) {
                this.isRequestLoading = true;
                const response = await http.get('/api/em/overtimes');
                this.overtimes = response.data.data;
                this.isRequestLoading = false;
            }
        },
        async setComponentTo(component: string) : Promise<void> {
            this.active_component = component;
        },
        async setSelectedRequest(request_id: number) : Promise<void> {
            this.selected_id = request_id;
        },
        async addEmployeeOvertimeRequest(data: any) : Promise<void> {
            this.isRequestLoading = true;
            const response = await http.post('/api/em/overtimes', data);
            this.overtimes.unshift(response.data.data);
            this.isRequestLoading = false;
        },
        async updateEmployeeOvertimeRequest(data: any, id?: number) {
            this.isRequestLoading = true;
            const response = await http.patch(`/api/em/overtimes/${id}`, data);
            this.isRequestLoading = false;
        },
        async deleteEmployeeOvertimeRequest(id: number, key: number) {
            this.isRequestLoading = true;
            await http.delete(`/api/em/overtimes/${id}`);
            this.overtimes.splice(key, 1);
            this.isRequestLoading = false;
        }
    }
});