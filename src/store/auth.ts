import http from "@/http-common";
import { ErrorTypes } from "@/types/error.types";
import { useStorage } from "@vueuse/core";
import { AxiosError } from "axios";
import { defineStore } from "pinia";

export interface UserTypes {
    id: string,
    name: string,
    email: string,
    role: string,
    isActivated: boolean,
    isFilled: boolean,
    profile_image: string,
    created_at: string,
    updated_at: string
}

export const useAuthStore = defineStore({
    id: 'auth',
    state: () => ({
        isAuthenticated: useStorage('isAuthenticated', false as boolean),
        auth_user: useStorage('auth_user', {} as UserTypes),
        isRequestLoading: false,
        errorBag: {} as ErrorTypes
    }),
    getters: {
        getAuthenticatedUser() : UserTypes {
            return this.auth_user;
        },
        getAllErrors() : any {
            if(this.errorBag.errors) {
                return this.errorBag.errors;
            }

            return false;
        },
        getErrorMessage() : string {
            return this.errorBag.message
        }
    },
    actions: {
        async loadLoggedUser() {
            try {
                this.isRequestLoading = true;
                const response = await http.get('/api/me');
                this.auth_user = response.data.data;
                this.isRequestLoading = false;
                this.errorBag = {
                    errors: {},
                    message: ''
                }
            } catch (error) {
                this.errorBag = (error as AxiosError).response?.data;
                this.isRequestLoading = false;
                throw new Error();
            }
        },
        async logUserIn(data: any) {
            try {
                this.isRequestLoading = true;
                await http.get('/sanctum/csrf-cookie');
                await http.post('api/login', data);
                this.isAuthenticated = true;
                this.isRequestLoading = false;
                this.errorBag = {
                    errors: {},
                    message: ''
                }
            } catch (error) {
                this.errorBag = (error as AxiosError).response?.data;
                this.isRequestLoading = false;
                throw new Error();
            }
        },
        async registerThisData(data : any) {
            try {
                this.isRequestLoading = true;
                await http.get('/sanctum/csrf-cookie');
                await http.post('/api/register', data);
                this.isRequestLoading = false;
                this.errorBag = {
                    errors: {},
                    message: ''
                }
            } catch (error) {
                this.errorBag = (error as AxiosError).response?.data;
                this.isRequestLoading = false;
                throw new Error();
            }
        },
        async logUserOut() {
            await http.get('/api/logout');
            this.isAuthenticated = false;     
            this.auth_user.id = '';
            this.auth_user.name = '';
            this.auth_user.email = '';
            this.auth_user.isActivated = false;
            this.auth_user.isFilled = false;
            this.auth_user.profile_image = '';
            this.auth_user.role = '';
        }
    }
});