import http from "@/http-common";
import { defineStore } from "pinia";
import { EmployeePersonalTypes } from "../employee/personal";

export interface VariantTypes {
    standard: string,
    other: string
}

export interface SuperadminTripTypes {
    id: number,
    date_from: string,
    date_to: string,
    time_in: VariantTypes,
    time_out: VariantTypes,
    destination_from: string,
    destination_to: string,
    purpose: string,
    status: string,
    created_at: string,
    employee: EmployeePersonalTypes
}

export const useSuperadminTripStore = defineStore({
    id: 'superadmin_trip',
    state: () => ({
        trips: [] as SuperadminTripTypes[],
        isRequestLoading: false
    }),
    getters: {
        getAllFiledTrips() : SuperadminTripTypes[] {
            return this.trips;
        }
    },
    actions: {
        async loadAllTrips(): Promise<void> {
            if(this.trips.length == 0) {
                this.isRequestLoading = true;
                const response = await http.get('/api/sa/trips');
                this.trips = response.data.data;
                this.isRequestLoading = false;
            }
        },
        async changeTripStatusTo(value : SuperadminTripTypes, key : number) : Promise<void> {
            this.isRequestLoading = true;
            const response = await http.patch(`/api/sa/trips/${value.id}`, value);
            this.trips.splice(key, 1, response.data.data);
            this.isRequestLoading = false;
        },
        async deleteTrip(id : number, key : number) : Promise<void> {
            this.isRequestLoading = true;
            await http.delete(`/api/sa/trips/${id}`);
            this.trips.splice(key, 1);
            this.isRequestLoading = false;
        }
    }
})