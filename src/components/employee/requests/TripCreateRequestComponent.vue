<template>
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div v-if="EmTrip.isRequestLoading" class="overlay">
                    <i class="fas fa-spinner fa-pulse fa-2x"></i>
                </div>
                <div class="card-header">
                    <h3 class="card-title">Create Trip</h3>
                    <div class="card-tools">
                        <button @click="EmTrip.setComponentTo('trip-request-component')" class="btn btn-danger btn-sm">
                            <i class="fas fa fa-sign-out-alt mr-1"></i>
                            Cancel Request
                        </button>
                    </div>
                </div>
                <form @submit.prevent="submitRequest()">
                    <div class="card-body">
                        <div class="row">
                            <div class="form-group col-sm-12 col-md-6">
                                <label>Date From</label>
                                <input v-model="form.date_from" type="date" class="form-control form-control-sm">
                            </div>
                            <div class="form-group col-sm-12 col-md-6">
                                <label>Date To</label>
                                <input v-model="form.date_to" type="date" class="form-control form-control-sm">
                            </div>
                            <div class="form-group col-sm-12 col-md-6">
                                <label>Time In</label>
                                <input v-model="form.time_in" type="time" class="form-control form-control-sm">
                            </div>
                            <div class="form-group col-sm-12 col-md-6">
                                <label>Time Out</label>
                                <input v-model="form.time_out" type="time" class="form-control form-control-sm">
                            </div>
                            <div class="form-group col-sm-12 col-md-6">
                                <label>Destination From</label>
                                <input v-model="form.destination_from" type="text" class="form-control form-control-sm">
                            </div>
                            <div class="form-group col-sm-12 col-md-6">
                                <label>Destination To</label>
                                <input v-model="form.destination_to" type="text" class="form-control form-control-sm">
                            </div>
                            <div class="form-group col-sm-12">
                                <label>Purpose of Trip</label>
                                <textarea v-model="form.purpose" name="" id="" cols="30" rows="10" class="form-control form-control-sm"></textarea>
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
import { useEmployeeTripStore } from '@/store/employee/trip'
import { defineComponent, reactive } from 'vue'
import * as toastr from 'toastr';

export default defineComponent({
    setup() {
        const EmTrip = useEmployeeTripStore();
        const form = reactive({
            date_from: null,
            date_to: null,
            time_from: null,
            time_to: null,
            destination_from: null,
            destination_to: null,
            purpose: null
        })

        const submitRequest = async () => {
            await EmTrip.addEmployeeTripRequest(form);
            await EmTrip.setComponentTo('trip-request-component');
            toastr.success('Trip request added.');
        }

        return {
            EmTrip,
            form,
            submitRequest
        }
    },
})
</script>
