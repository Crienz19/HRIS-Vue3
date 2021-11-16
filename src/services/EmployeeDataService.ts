import http from "@/http-common";

export interface EmployeeTypes {
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
    employee_id: string,
    date_hired: string,
    created_at: string,
    updated_at: string
}

export interface CreditTypes {
    user_id: number,
    VL: number,
    SL: number,
    PTO: number,
    OB: number,
    OT: number,
    total_PTO: number,
    total_SL: number,
    total_VL: number,
}

export interface LeaveRequestTypes {
    id: number,
    user_id: number,
    type: string,
    pay_type: string,
    from: string,
    to: string,
    time_from: string,
    time_to: string,
    reason: string,
    count: number,
    recommending_approval: string,
    final_approval: string,
    created_at: string,
    updated_at: string
}

export interface OvertimeRequestTypes {
    id: number,
    date: string,
    from: string,
    to: string,
    reason: string,
    status: string,
    created_at: string
}

export interface TripRequestTypes {
    id: number,
    date_from: string,
    date_to: string,
    time_in: string,
    time_out: string,
    destination_from: string,
    destination_to: string,
    purpose: string,
    status: string,
    created_at: string
}

export interface COERequestTypes {
    id: number,
    date_needed: string,
    reason: string,
    compensation: boolean,
    status: string,
    created_at: string
}

export const getEmployeePersonalDetails = async () : Promise<EmployeeTypes> => {
    const response = await http.get('/api/getUserPersonalDetails');
    return response.data;
}

export const getEmployeeLeaveCredits = async () : Promise<CreditTypes> => {
    const response = await http.get('/api/getUserLeaveCredits');
    return response.data;
}

export const getEmployeeLeaveRequests = async () : Promise<any> => {
    const response = await http.get('/api/em/leaves');
    return response.data.data;
}

export const getEmployeeOvertimeRequests = async () => {
    const response = await http.get('/api/em/overtimes');
    return response.data.data;
}

export const getEmployeeTripRequests = async () => {
    const response = await http.get('/api/em/trips');
    return response.data.data;
}

export const getEmployeeCOERequests = async () => {
    const response = await http.get('/api/em/coes');
    return response.data.data;
}

export const saveEmployeeLeaveRequest = async (data: any) => {
    const response = await http.post('/api/em/leaves', data);
    return response.data;
}

export const getEmployeeOneLeaveRequest = async (id: any) : Promise<LeaveRequestTypes> => {
    const response = await http.get(`/api/em/leaves/${id}`);
    return response.data.data;
}

export const updateEmployeeLeaveRequest = async (id: any, data: any) => {
    const response = await http.patch(`/api/em/leaves/${id}`, data);
    return response.data;
}

export const deleteEmployeeLeaveRequest = async (id: any) => {
    const response = await http.delete(`/api/em/leaves/${id}`);
    return response.data;
}

export const saveEmployeeOvertimeRequest = async (data: any) => {
    const response = await http.post('/api/em/overtimes', data);
    return response.data;
}