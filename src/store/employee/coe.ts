import http from "@/http-common";
import { defineStore } from "pinia";

export interface EmployeeCOETypes {
    id: number,
    date_needed: string,
    reason: string,
    compensation: boolean,
    status: string,
    created_at: string
}

export const useEmployeeCOEStore = defineStore({
    id: 'employee_coe',
    state: () => ({
        certs: [] as EmployeeCOETypes[],
        selected_id: 0,
        active_component: 'COERequestComponent',
        isRequestLoading: false
    }),
    getters: {
        getAllRequest() : EmployeeCOETypes[] {
            return this.certs;
        },
        getCertCounts() : number {
            return this.certs.length;
        },
        getSelectedRequest(): EmployeeCOETypes | undefined {
            return this.certs.find(e => e.id == this.selected_id)
        }
    },
    actions: {
        async loadEmployeeCOERequest() : Promise<void> {
            if(this.certs.length == 0) {
                this.isRequestLoading = true;
                const response = await http.get('/api/em/coes');
                this.certs = response.data.data;
                this.isRequestLoading = false;
            }
        },
        async setComponentTo(component: string) {
            this.active_component = component;
        },
        async setSelectedRequest(request_id : number) {
            this.selected_id = request_id;
        },
        async addEmployeeCOERequest(data: any) : Promise<void> {
            this.isRequestLoading = true;
            const response = await http.post('/api/em/coes', data);
            this.certs.unshift(response.data.data)
            this.isRequestLoading = false;
        },
        async updateEmployeeCOERequest(data: any, id? : number) : Promise<void> {
            this.isRequestLoading = true;
            const response = await http.patch(`/api/em/coes/${id}`, data);
            this.isRequestLoading = false;
        },
        async deleteEmployeeCOERequest(id: number, key: number) : Promise<void> {
            this.isRequestLoading = true;
            await http.delete(`/api/em/coes/${id}`);
            this.certs.splice(key, 1);
            this.isRequestLoading = false;
        }
    }
})