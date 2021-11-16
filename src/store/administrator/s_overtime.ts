import http from "@/http-common";
import { defineStore } from "pinia";
import { SuperadminOvertimeTypes } from "../superadmin/overtime";

export const useAdminSvOvertimeStore = defineStore({
    id: 'admin_supervisor_overtime',
    state: () => ({
        overtimes: [] as SuperadminOvertimeTypes[],
        isRequestLoading: false
    }),
    getters: {
        getAllOvertimeRequest() : SuperadminOvertimeTypes[] {
            return this.overtimes;
        }
    },
    actions: {
        async loadAllSupervisorOvertime() : Promise<void> {
            if (this.overtimes.length == 0) {
                this.isRequestLoading = true;
                const response = await http.get('/api/admin/overtimes/getSupervisor');
                this.overtimes = response.data.data;
                this.isRequestLoading = false;
            }
        },
        async approveSelectedOvertime(requestId : number, key : number) : Promise<void> {
            const response = await http.patch(`/api/overtimes/${requestId}/approveOvertime`);
            this.overtimes.splice(key , 1, response.data);
        },
        async disapproveSelectedOvertime(requestId : number, key : number) : Promise<void> {
            const response = await http.patch(`/api/overtimes/${requestId}/disapproveOvertime`);
            this.overtimes.splice(key, 1, response.data);
        }
    }
})