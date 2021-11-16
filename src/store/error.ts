import { AxiosError } from "axios";
import { defineStore } from "pinia";

export const useErrorStore = defineStore({
    id: 'error',
    state: () => ({
        errors: {} as AxiosError
    }),
    getters: {
        getAllErrors () : any {
            return this.errors.response?.data.errors;
        },
        getErrorMessage () : string {
            return this.errors.response?.data.message;
        }
    },
    actions: {
        async setError(data : AxiosError) : Promise<void> {
            this.errors = await data;
        }
    }
})