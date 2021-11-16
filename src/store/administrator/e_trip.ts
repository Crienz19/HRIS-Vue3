import http from "@/http-common";
import { defineStore } from "pinia";
import { SuperadminTripTypes } from "../superadmin/trip";

export const useAdminEmpTripStore = defineStore({
    id: 'admin_employee_trip',
    state: () => ({
        trips: [] as SuperadminTripTypes[],
        isRequestLoading : false
    }),
    getters: {
        getAllTripRequest() : SuperadminTripTypes[] {
            return this.trips;
        }
    },
    actions: {
        async loadAllEmployeeTrips() : Promise<void> {
            if (this.trips.length == 0) {
                this.isRequestLoading = true;
                const response = await http.get('/api/admin/trips/getEmployee');
                this.trips = response.data.data;
                this.isRequestLoading = false;
            }
        }
    }
})