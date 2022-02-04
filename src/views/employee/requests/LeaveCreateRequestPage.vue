<template>
    <div class="row">
        <div class="col-12">
            <div class="alert alert-primary">
                dfjklsdfjl
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-sm-12">
            <div class="card">
                <div class="card-header">
                    <h3 class="card-title">
                        <b>Leave Create</b>
                    </h3>
                    <div class="card-tools">
                        <router-link tag="a" to="/em/leaves" class="btn btn-danger btn-sm">
                            <i class="fas fa fa-sign-out-alt"></i>
                            Cancel Request</router-link>
                    </div>
                </div>
                <form @submit.prevent="submitRequest()">
                    <div class="card-body">
                        <div class="row">
                            <div class="form-group col-12 col-md-6">
                                <label>Type</label>
                                <select v-model="form.type" class="form-control form-control-sm">
                                    <option selected>Select type</option>
                                    <option value="VL">VL</option>
                                    <option value="SL">SL</option>
                                    <option value="PTO">PTO</option>
                                    <option value="VL - Half">VL - Half</option>
                                    <option value="SL - Half">SL - Half</option>
                                    <option value="PTO - Half">PTO - Half</option>
                                    <option value="Special">Special Leave</option>
                                    <option value="Special - Half">Special Half Leave</option>
                                </select>
                            </div>
                            <div class="form-group col-12 col-md-6">
                                <label>Pay</label>
                                <select v-model="form.pay_type" class="form-control form-control-sm">
                                    <option>Select type</option>
                                    <option value="With Pay">With Pay</option>
                                    <option value="Without Pay">Without Pay</option>
                                </select>
                            </div>
                            <div class="form-group col-12">
                                <label>Reason</label>
                                <textarea v-model="form.reason" cols="30" rows="10" class="form-control" placeholder="Type your reason"></textarea>
                            </div>
                            <div class="form-group col-12 col-md-6">
                                <label>Date From</label>
                                <input v-model="form.from" type="date" class="form-control form-control-sm">
                            </div>
                            <div class="form-group col-12 col-md-6">
                                <label>Date To</label>
                                <input v-model="form.to" type="date" class="form-control form-control-sm">
                            </div>
                            <div v-if="form.type == 'VL - Half' || form.type == 'SL - Half' || form.type == 'PTO - Half'" class="form-group col-12 col-md-6">
                                <label>Time From</label>
                                <input v-model="form.time_from" type="time" class="form-control form-control-sm">
                            </div>
                            <div v-if="form.type == 'VL - Half' || form.type == 'SL - Half' || form.type == 'PTO - Half'" class="form-group col-12 col-md-6">
                                <label>Time To</label>
                                <input v-model="form.time_to" type="time" class="form-control form-control-sm">
                            </div>
                        </div>
                    </div>
                    <div class="card-footer">
                        <button type="submit" class="btn btn-primary btn-sm">Submit request</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { saveEmployeeLeaveRequest } from '@/services/EmployeeDataService';
import { defineComponent, reactive } from 'vue'
import { useRouter } from 'vue-router';

export default defineComponent({
    setup() {
        const router = useRouter();
        const form = reactive({
            type: null,
            pay_type: null,
            reason: null,
            from: null,
            to: null,
            time_from: null,
            time_to: null
        });

        const submitRequest = async () => {
            const res = await saveEmployeeLeaveRequest(form);
            await router.push('/em/leaves');
        }

        return {
            form,
            submitRequest
        }
    },
})
</script>
