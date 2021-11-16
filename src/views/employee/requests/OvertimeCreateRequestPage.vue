<template>
    <div class="row">
        <div class="col-12">
            <div class="alert alert-primary">
                dfjklsdfjl
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-header">
                    <h3 class="card-title">Create Overtime</h3>
                    <div class="card-tools">
                        <router-link tag="a" to="/em/overtimes" class="btn btn-danger btn-sm">
                            <i class="fas fa fa-sign-out-alt"></i>
                            Cancel Request
                        </router-link>
                    </div>
                </div>
                <form @submit.prevent="submitRequest()">
                    <div class="card-body">
                        <div class="row">
                            <div class="form-group col-12">
                                <label>Date</label>
                                <input v-model="form.date" type="date" class="form-control form-control-sm">
                            </div>
                            <div class="form-group col-xs-12 col-md-6">
                                <label>From</label>
                                <input v-model="form.from" type="time" class="form-control form-control-sm">
                            </div>
                            <div class="form-group col-xs-12 col-md-6">
                                <label>To</label>
                                <input v-model="form.to" type="time" class="form-control form-control-sm">
                            </div>
                            <div class="form-group col-xs-12 col-12">
                                <label>Reason</label>
                                <textarea v-model="form.reason" cols="30" rows="10" class="form-control"></textarea>
                            </div>
                        </div>
                    </div>
                    <div class="card-footer">
                        <button type="submit" class="btn btn-primary btn-sm">Submit Request</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { saveEmployeeOvertimeRequest } from '@/services/EmployeeDataService';
import { defineComponent, reactive } from 'vue'
import { useRouter } from 'vue-router';

export default defineComponent({
    setup() {
        const router = useRouter();
        const form = reactive({
            date: null,
            from: null,
            to: null,
            reason: null
        });      

        const submitRequest = async () => {
            await saveEmployeeOvertimeRequest(form);
            router.push('/em/overtimes');
        }

        return {
            form,
            submitRequest
        }
        
    },
})
</script>
