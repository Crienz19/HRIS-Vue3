import http from "@/http-common";
import { defineStore } from "pinia";
import { EmployeePersonalTypes } from "../employee/personal";

export interface HourTypes {
    standard: string,
    other: string
}

export interface SuperadminOvertimeTypes {
    id: number,
    date: string,
    from: HourTypes,
    to: HourTypes,
    reason: string,
    status: string,
    created_at: string,
    employee: EmployeePersonalTypes
}

export const useSuperadminOvertimeStore = defineStore({
    id: 'superadmin_overtime',
    state: () => ({
        overtimes: [] as SuperadminOvertimeTypes[],
        isRequestLoading: false
    }),
    getters: {
        getAllFiledOvertimes() : SuperadminOvertimeTypes[] {
            return this.overtimes;
        }
    },
    actions: {
        async loadAllOvertimes(): Promise<void> {
            if(this.overtimes.length == 0) {
                this.isRequestLoading = true;
                const response = await http.get('/api/sa/overtimes');
                this.overtimes = response.data.data;
                this.isRequestLoading = false;
            }
        },
        async changeOvertimeStatusTo(value : SuperadminOvertimeTypes, key : number) : Promise<void> {
            this.isRequestLoading = true;
            const response = await http.patch(`/api/sa/overtimes/${value.id}`, value);
            this.overtimes.splice(key, 1, response.data.data);
            this.isRequestLoading = false;
        },
        async deleteOvertime(id : number, key : number) : Promise<void> {
            this.isRequestLoading = true;
            await http.delete(`/api/sa/overtimes/${id}`);
            this.overtimes.splice(key, 1);
            this.isRequestLoading = false;
        }
    }
})