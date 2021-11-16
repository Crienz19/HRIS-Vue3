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
                    <h3 class="card-title">Edit Overtime</h3>
                    <div class="card-tools">
                        <button @click="EmOvertime.setComponentTo('overtime-request-component')" class="btn btn-danger btn-sm">
                            <i class="fas fa fa-sign-out-alt"></i>
                            Cancel Request
                        </button>
                    </div>
                </div>
                <form @submit.prevent="updateRequest()">
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
import { useEmployeeOvertimeStore } from '@/store/employee/overtime'
import { computed, defineComponent } from 'vue'
import * as toastr from 'toastr';

export default defineComponent({
    setup() {
        const EmOvertime = useEmployeeOvertimeStore();
        const form = computed(() => EmOvertime.getSelectedRequest)

        const updateRequest = async () => {
            EmOvertime.updateEmployeeOvertimeRequest(form.value, form.value?.id)
            await EmOvertime.setComponentTo('overtime-request-component');
            toastr.success('Overtime request updated.');
        }

        return {
            EmOvertime,
            form,
            updateRequest
        }
    },
})
</script>
