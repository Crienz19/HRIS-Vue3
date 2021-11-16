import http from "@/http-common";
import { defineStore } from "pinia";
import { SuperadminTripTypes } from "../superadmin/trip";

export const useHumanResourceTripStore = defineStore({
    id: 'hr_trips',
    state: () => ({
        trips: [] as SuperadminTripTypes[],
        isRequestLoading: false
    }),
    getters: {
        getAllTrips() : SuperadminTripTypes[]{
            return this.trips;
        }
    },
    actions: {
        async loadAllTrips() : Promise<void> {
            if (this.trips.length == 0) {
                this.isRequestLoading = true;
                const response = await http.get('/api/hr/trips');
                this.trips = response.data.data;
                this.isRequestLoading = false;
            }
        },
        async acknowledgeTrip(requestId : number, key : number) : Promise<void> {
            this.isRequestLoading = true;
            const response = await http.patch(`/api/hr/trips/${requestId}/acknowledged`)
            this.trips.splice(key, 1, response.data);
            this.isRequestLoading = false;
        }
    }
})