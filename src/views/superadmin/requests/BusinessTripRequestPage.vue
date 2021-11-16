<template>
    <div class="row">
        <div class="col-12">
            <div class="alert alert-primary">
                jksldfjsl
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-header">
                    <h5 class="card-title"><b>Trip Request</b></h5>

                    <div class="card-tools">
                        <div class="input-group input-group-sm" style="width: 150px;">
                        <input type="text" name="table_search" class="form-control float-right" placeholder="Search">

                        <div class="input-group-append">
                            <button type="submit" class="btn btn-default">
                                <i class="fas fa-search"></i>
                            </button>
                        </div>
                        </div>
                    </div>
                </div>
                <div class="card-body p-0">
                    <table class="table table-hovered table-striped text-sm">
                        <thead>
                            <tr class="text-center">
                                <th class="text-left">ID</th>
                                <th>First Name</th>
                                <th>Last name</th>
                                <th>Date From</th>
                                <th>Date To</th>
                                <th>Time In</th>
                                <th>Time Out</th>
                                <th>Dest. From</th>
                                <th>Dest. To</th>
                                <th>Status</th>
                                <th>Created At</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody v-if="trip.isRequestLoading">
                            <tr class="text-center">
                                <td colspan="12">
                                    <i class="fas fa-spinner fa-pulse fa-2x"></i>
                                </td>
                            </tr>
                        </tbody>
                        <tbody v-else class="text-center">
                            <tr v-for="(trip, key) in trips" :key="trip.id">
                                <td class="text-left">{{ trip.id }}</td>
                                <td>{{ trip.employee?.first_name }}</td>
                                <td>{{ trip.employee?.last_name }}</td>
                                <td>{{ trip.date_from }}</td>
                                <td>{{ trip.date_to }}</td>
                                <td>{{ trip.time_in.standard }}</td>
                                <td>{{ trip.time_out.standard }}</td>
                                <td>{{ trip.destination_from }}</td>
                                <td>{{ trip.destination_to }}</td>
                                <td>
                                    <select @change="changeTripStatus(trip, key, $event.target.value)" class="form-control form-control-xs">
                                        <option selected>{{ trip.status }}</option>
                                        <option value="Pending">Pending</option>
                                        <option value="Acknowledged">Acknowledged</option>
                                    </select>
                                </td>
                                <td>{{ trip.created_at }}</td>
                                <td>
                                    <button @click="selectTrip(trip)" data-toggle="modal" data-target="#modal-lg" class="btn btn-primary btn-xs mr-1">
                                        <i class="fas fa-search"></i></button>

                                    <button @click="deleteTripRequest(trip.id, key)" class="btn btn-danger btn-xs mr-1">
                                        <i class="fas fa-times"></i></button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
    <div class="modal fade show" id="modal-lg" aria-modal="true" role="dialog">
        <div class="modal-dialog modal-lg modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title">Trip of {{ selectedTrip.first_name }} {{ selectedTrip.last_name }}</h4>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="form-group col-md-6">
                            <label>Date From</label>
                            <input v-model="selectedTrip.date_from" type="text" class="form-control form-control-sm" disabled>
                        </div>
                        <div class="form-group col-md-6">
                            <label>Date To</label>
                            <input v-model="selectedTrip.date_to" type="text" class="form-control form-control-sm" disabled>
                        </div>
                        <div class="form-group col-md-6">
                            <label>Time In</label>
                            <input v-model="selectedTrip.time_in" type="text" class="form-control form-control-sm" disabled>
                        </div>
                        <div class="form-group col-md-6">
                            <label>Time Out</label>
                            <input v-model="selectedTrip.time_out" type="text" class="form-control form-control-sm" disabled>
                        </div>
                        <div v-if="selectedTrip.destination_from" class="form-group col-6">
                            <label>Destination From</label>
                            <input v-model="selectedTrip.destination_from" type="text" class="form-control form-control-sm" disabled>
                        </div>
                        <div v-if="selectedTrip.destination_to" class="form-group col-6">
                            <label>To</label>
                            <input v-model="selectedTrip.destination_to" type="text" class="form-control form-control-sm" disabled>
                        </div>
                        <div class="form-group col-12">
                            <label>Reason</label>
                            <textarea v-model="selectedTrip.purpose" disabled cols="30" rows="10" class="form-control form-control-sm"></textarea>
                        </div>
                    </div>
                </div>
            </div>
            <!-- /.modal-content -->
        </div>
        <!-- /.modal-dialog -->
    </div>
</template>

<script lang="ts">
import { SuperadminTripTypes, useSuperadminTripStore } from '@/store/superadmin/trip'
import { computed, defineComponent, onBeforeMount, ref } from 'vue'
import * as toastr from 'toastr';

export default defineComponent({
    setup() {
        const trip = useSuperadminTripStore();
        const trips = computed(() => trip.getAllFiledTrips)
        
        const selectedTrip = ref({
            first_name: '',
            last_name: '',
            date_from: '',
            date_to: '',
            time_in: '',
            time_out: '',
            destination_from: '',
            destination_to: '',
            purpose: ''
        })

        onBeforeMount(async () => {
            await trip.loadAllTrips();
        })

        const changeTripStatus = async (value : SuperadminTripTypes, key : number, target : any) => {
            value.status = target;
            await trip.changeTripStatusTo(value, key);
            toastr.success(`Business Trip ID ${value.id} set to ${value.status}`)
        }

        const selectTrip = (value : SuperadminTripTypes) => {
            selectedTrip.value.first_name = value.employee.first_name;
            selectedTrip.value.last_name = value.employee.last_name;
            selectedTrip.value.date_from = value.date_from;
            selectedTrip.value.date_to = value.date_to;
            selectedTrip.value.time_in = value.time_in.standard;
            selectedTrip.value.time_out = value.time_out.standard;
            selectedTrip.value.destination_from = value.destination_from;
            selectedTrip.value.destination_to = value.destination_to;
            selectedTrip.value.purpose = value.purpose;
        }

        const deleteTripRequest = async (tripId : number, key : number) => {
            let p = confirm('Delete this request?');
            if(p)
            await trip.deleteTrip(tripId, key);
            toastr.success(`Business trip ID ${tripId} has been deleted.`)
        }

        return {
            trip,
            trips,
            selectedTrip,
            selectTrip,
            changeTripStatus,
            deleteTripRequest
        }
    },
})
</script>
