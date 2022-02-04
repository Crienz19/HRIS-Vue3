import http from "@/http-common";
import { defineStore } from "pinia";
import { EmployeePersonalTypes } from "../employee/personal";

export interface HourTypes {
    standard: string,
    other: string
}

export interface SupervisorOvertimeTypes {
    id: number,
    date: string,
    from: HourTypes,
    to: HourTypes,
    reason: string,
    status: string,
    created_at: string,
    employee: EmployeePersonalTypes
}

export const useSupervisorOvertimeStore = defineStore({
    id: 'supervisor_overtime',
    state: () => ({
        overtimes: [] as SupervisorOvertimeTypes[],
        isRequestLoading: false
    }),
    getters: {
        getSubsOvertimes () : SupervisorOvertimeTypes[] {
            return this.overtimes;
        },
        getIsRequestLoading() : boolean {
            return this.isRequestLoading;
        }
    },
    actions: {
        async loadSubsOvertime () : Promise<void> {
            if (this.overtimes.length == 0)             {
                try {
                    this.isRequestLoading = true;
                    const response = await http.get('/api/sv/overtimes');
                    this.overtimes = response.data.data;
                    this.isRequestLoading = false;
                } catch (error) {   
                    this.isRequestLoading = false;
                    throw new Error();
                }
            }
        },
        async approveSelectedOvertime (requestId : number, key : number) : Promise<void> {
            try {
                this.isRequestLoading = true;
                const response = await http.patch(`/api/sv/overtimes/${requestId}/approved`);
                this.overtimes.splice(key, 1, response.data.data);
                this.isRequestLoading = false;
            } catch (error) {
                this.isRequestLoading = false;
                throw new Error();
            }
        },
        async disapproveSelectedOvertime (requestId : number, key : number) : Promise<void> {
            try {
                this.isRequestLoading = true;
                const response = await http.patch(`/api/sv/overtimes/${requestId}/disapproved`);
                this.overtimes.splice(key, 1, response.data.data);
                this.isRequestLoading = false;
            } catch (error) {
                this.isRequestLoading = false;
                throw new Error();
            }
        }
    }
})