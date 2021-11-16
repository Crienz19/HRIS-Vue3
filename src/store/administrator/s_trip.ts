import http from "@/http-common";
import { defineStore } from "pinia";
import { SuperadminTripTypes } from "../superadmin/trip";

export const useAdminSvTripStore = defineStore({
    id: 'admin_supervisor_trip',
    state: () => ({
        trips: [] as SuperadminTripTypes[],
        isRequestLoading: false
    }),
    getters: {
        getAllTripRequest() : SuperadminTripTypes[] {
            return this.trips;
        }
    },
    actions: {
        async loadAllSupervisorTrips() : Promise<void> {
            if (this.trips.length == 0) {
                this.isRequestLoading = true;
                const response = await http.get('/api/admin/trips/getSupervisor');
                this.trips = response.data.data;
                this.isRequestLoading = false;
            }
        }
    }
})