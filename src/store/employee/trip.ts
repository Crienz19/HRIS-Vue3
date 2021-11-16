import http from "@/http-common";
import { defineStore } from "pinia";

export interface VariantTypes {
    standard: string,
    other: string
}

export interface EmployeeTripTypes {
    id: number,
    date_from: string,
    date_to: string,
    time_in: VariantTypes,
    time_out: VariantTypes,
    destination_from: string,
    destination_to: string,
    purpose: string,
    status: string,
    created_at: string
}

export const useEmployeeTripStore = defineStore({
    id: 'employee_trip',
    state: () => ({
        trips: [] as EmployeeTripTypes[],
        selected_id: 0,
        active_component: 'trip-request-component',
        isRequestLoading: false
    }),
    getters: {
        getAllRequest() : EmployeeTripTypes[]{
            return this.trips;
        },
        getTripCounts() : number {
            return this.trips.length;
        },
        getSelectedRequest() : EmployeeTripTypes | undefined{
            return this.trips.find(e => e.id == this.selected_id);
        }
    },
    actions: {
        async loadEmployeeTripRequests() : Promise<void> {
            this.isRequestLoading = true;
            const response = await http.get('/api/em/trips');
            this.trips = response.data.data;
            this.isRequestLoading = false;
        },
        async setComponentTo(component : string) {
            this.active_component = component;
        },
        async setSelectedRequest(request_id: number) {
            this.selected_id = request_id;
        },
        async addEmployeeTripRequest(data: any) : Promise<void> {
            this.isRequestLoading = true;
            const response = await http.post('/api/em/trips', data)
            this.trips.unshift(response.data.data);
            this.isRequestLoading = false;
        },
        async updateEmployeeTripRequest(data: any, id? : number) : Promise<void> {
            this.isRequestLoading = true;
            const response = await http.patch(`/api/em/trips/${id}`, data);
            this.isRequestLoading = false;
        },
        async deleteEmployeeTripRequest(id: number, key: number) : Promise<void> {
            this.isRequestLoading = true;
            await http.delete(`/api/em/trips/${id}`);
            this.trips.splice(key, 1);
            this.isRequestLoading = false;
        }
    }
})