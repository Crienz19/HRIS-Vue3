<template>
    <div class="row">
        <div class="col-12">
            <div class="alert alert-primary">
                <b>Testing</b>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-header">
                    <h3 class="card-title">Trips</h3>
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
</template>

<script lang="ts">
import { useAdminSvTripStore } from '@/store/administrator/s_trip'
import { SuperadminTripTypes } from '@/store/superadmin/trip';
import { computed, defineComponent, onBeforeMount } from 'vue'

export default defineComponent({
    setup() {
        const trip = useAdminSvTripStore();
        const trips = computed(() => trip.getAllTripRequest);

        const selectTrip = (trip : SuperadminTripTypes, key : number) => {
            console.log(trip, key);
        }

        onBeforeMount(async () => {
            await trip.loadAllSupervisorTrips();
        });

        return {
            trip,
            trips,
            selectTrip
        }
    },
})
</script>
