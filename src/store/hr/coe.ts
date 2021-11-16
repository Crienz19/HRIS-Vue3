import http from "@/http-common";
import { defineStore } from "pinia";
import { EmployeePersonalTypes } from "../employee/personal";

export interface HumanResourceCOETypes {
    id: number,
    date_needed: string,
    reason: string,
    compensation: boolean,
    status: string,
    created_at: string,
    employee: EmployeePersonalTypes
}

export const useHumanResourceCOEStore = defineStore({
    id: 'hr_coe',
    state: () => ({
        coes: [] as HumanResourceCOETypes[],
        isRequestLoading: false
    }),
    getters: {
        getAllFiledCoes() : HumanResourceCOETypes[] {
            return this.coes;
        }
    },
    actions: {
        async loadAllFiledCoes() : Promise<void> {
            if(this.coes.length == 0) {
                this.isRequestLoading = true;
                const response = await http.get('/api/hr/coes');
                this.coes = response.data.data;
                this.isRequestLoading = false;
            }
        },
        async approveSelectedCoe(requestId : number, key : number) : Promise<void> {
            this.isRequestLoading = true;
            const response = await http.patch(`/api/hr/coes/${requestId}/approved`)
            this.coes.splice(key, 1, response.data);
            this.isRequestLoading = false;
        }
    }
})