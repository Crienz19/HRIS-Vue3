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
                        <input v-model="tripSearch" type="text" name="table_search" class="form-control float-right" placeholder="Search by last name">
<!-- 
                        <div class="input-group-append">
                            <button type="submit" class="btn btn-default">
                                <i class="fas fa-search"></i>
                            </button>
                        </div> -->
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
                        <tbody v-if="trip.isRequestLoading" class="text-center">
                            <tr>
                                <td colspan="12">
                                    <i class="fas fa fa-pulse fa-spinner fa-2x"></i>
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
                                    <i v-if="trip.status == 'Pending'" class="fas fa-exclamation text-warning"></i>
                                    <i v-if="trip.status == 'Acknowledged'" class="fas fa-check text-success"></i>
                                </td>
                                <td>{{ trip.created_at }}</td>
                                <td>
                                    <button @click="selectTrip(trip, key)" data-toggle="modal" data-target="#modal-lg" class="btn btn-primary btn-xs mr-1">
                                        <i class="fas fa-search"></i></button>
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
                <div v-if="trip.isRequestLoading" class="overlay">
                    <i class="fas fa-2x fa-spinner fa-spin"></i>
                </div>
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
                <div class="modal-footer">
                    <button :disabled="selectedTrip.status = 'Acknowledged'" @click="acknowledgedSelectedRequest(selectedTrip.id)" class="btn btn-success btn-sm btn-block">Acknowledged</button>
                </div>
            </div>
            <!-- /.modal-content -->
        </div>
        <!-- /.modal-dialog -->
    </div>
</template>

<script lang="ts">
import { useHumanResourceTripStore } from '@/store/hr/trip'
import { SuperadminTripTypes } from '@/store/superadmin/trip';
import { computed, defineComponent, onBeforeMount, ref } from 'vue'

export default defineComponent({
    setup() {
        const trip = useHumanResourceTripStore();

        const selectedKey = ref(0);
        const selectedTrip = ref({
            id: 0,
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

        const tripSearch = ref("");

        const trips = computed(() => {
            return trip.getAllTrips.filter((trip) => {
                return (trip.employee.last_name.toLowerCase().match(tripSearch.value));
            });
        })

        const selectTrip = (value : SuperadminTripTypes, key : number) => {
            selectedTrip.value.id = value.id;
            selectedTrip.value.first_name = value.employee.first_name;
            selectedTrip.value.last_name = value.employee.last_name;
            selectedTrip.value.date_from = value.date_from;
            selectedTrip.value.date_to = value.date_to;
            selectedTrip.value.time_in = value.time_in.standard;
            selectedTrip.value.time_out = value.time_out.standard;
            selectedTrip.value.destination_from = value.destination_from;
            selectedTrip.value.destination_to = value.destination_to;
            selectedTrip.value.purpose = value.purpose;
            selectedKey.value = key;
        }

        const acknowledgedSelectedRequest = async (requestId : number) => {
            await trip.acknowledgeTrip(requestId, selectedKey.value);
        }

        onBeforeMount(async () => {
            await trip.loadAllTrips();
        })

        return {
            trip,
            trips,
            selectedTrip,
            tripSearch,
            selectTrip,
            acknowledgedSelectedRequest
        }
    },
})
</script>
