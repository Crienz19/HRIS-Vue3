import http from "@/http-common";
import { ref } from "@vue/reactivity";

export interface Employee {
    user_id: number,
    first_name: string,
    middle_name: string,
    last_name: string,
    birth_date: string,
    civil_status: string,
    present_address: string,
    permanent_address: string,
    contact_no_1: string,
    contact_no_2: string,
    tin: string,
    sss: string,
    pagibig: string,
    philhealth: string,
    branch_id: number,
    skype_id: string,
    department_id: number,
    position: string,
    created_at: string,
    updated_at: string
}

export default async function useUser() {
    const response = await http.get('/api/getUserPersonalDetails');

    return { response }
}