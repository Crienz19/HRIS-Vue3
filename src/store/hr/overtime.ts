import http from "@/http-common";
import { defineStore } from "pinia";
import { SupervisorOvertimeTypes } from "../supervisor/overtime";

export const useHumanResourceOvertimeStore = defineStore({
    id: 'hr_overtimes',
    state: () => ({
        overtimes: [] as SupervisorOvertimeTypes[],
        isRequestLoading: false
    }),
    getters: {
        getAllOvertimes () : SupervisorOvertimeTypes[] {
            return this.overtimes;
        }
    },
    actions: {
        async loadAllOvertimes () : Promise<void> {
            if(this.overtimes.length == 0) {
                this.isRequestLoading = true;
                const response = await http.get('/api/hr/overtimes');
                this.overtimes = response.data.data;
                this.isRequestLoading = false;
            }
        }
    }
})