<template>
    <div class="row">
        <div class="col-12">
            <div class="alert alert-primary">
                etst
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div v-if="EmCOE.isRequestLoading" class="overlay">
                    <i class="fas fa-spinner fa-pulse fa-2x"></i>
                </div>
                <div class="card-header">
                    <h3 class="card-title">Edit COE</h3>
                    <div class="card-tools">
                        <button @click="EmCOE.setComponentTo('COERequestComponent')" class="btn btn-danger btn-sm">
                            <i class="fas fa fa-sign-out-alt mr-1"></i>
                            Cancel Request
                        </button>
                    </div>
                </div>
                <form @submit.prevent="updateRequest()">
                    <div class="card-body">
                        <div class="form-group col-12">
                            <label>Date needed</label>
                            <input v-model="form.date_needed" type="date" class="form-control form-control-sm">
                        </div>
                        <div class="form-group col-12">
                            <label>Reason</label>
                            <textarea v-model="form.reason" cols="30" rows="10" class="form-control form-control-sm"></textarea>
                        </div>
                        <div class="form-group col-12">
                            <input v-model="form.compensation" type="checkbox"> <i>Please check if we need to indicate your compensation</i>
                        </div>
                    </div>
                    <div class="card-footer">
                        <button type="submit" class="btn btn-primary btn-sm">Update Request</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { useEmployeeCOEStore } from '@/store/employee/coe'
import { computed, defineComponent } from 'vue'
import * as toastr from 'toastr';

export default defineComponent({
    setup() {
        const EmCOE = useEmployeeCOEStore();

        const form = computed(() => EmCOE.getSelectedRequest);

        const updateRequest = async () => {
            await EmCOE.updateEmployeeCOERequest(form.value, form.value?.id);
            await EmCOE.setComponentTo('COERequestComponent')
            toastr.success('COE request updated.');
        }

        return {
            EmCOE,
            form,
            updateRequest
        }
    },
})
</script>
