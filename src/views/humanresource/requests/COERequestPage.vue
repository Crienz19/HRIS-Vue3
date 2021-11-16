<template>
    <div class="row">
        <div class="col-12">
            <div class="alert alert-primary">
                test
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-header">
                    <h3 class="card-title">COEs</h3>
                    <div class="card-tools">
                        
                    </div>
                </div>
                <div class="card-body p-0">
                    <table class="table table-sm table-striped">
                        <thead>
                            <tr class="text-center">
                                <th class="text-left">ID</th>
                                <th>First Name</th>
                                <th>Last name</th>
                                <th>Date Requested</th>
                                <th>Date Needed</th>
                                <th>Compensation</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody v-if="coe.isRequestLoading">
                            <tr class="text-center">
                                <td colspan="8">
                                    <i class="fas fa-2x fa-spinner fa-spin"></i>
                                </td>
                            </tr>
                        </tbody>
                        <tbody v-else>
                            <tr class="text-center" v-for="(coe, key) in coes" :key="coe.id">
                                <td class="text-left">{{ coe.id }}</td>
                                <td>{{ coe.employee.first_name }}</td>
                                <td>{{ coe.employee.last_name }}</td>
                                <td>{{ coe.created_at }}</td>
                                <td>{{ coe.date_needed }}</td>
                                <td>
                                    <b v-if="coe.compensation">With Compensation</b>
                                    <b v-else>Without Compensation</b>
                                </td>
                                <td>
                                    <i v-if="coe.status == 'Pending'" class="fas fa-exclamation text-warning"></i>
                                    <i v-if="coe.status == 'Acknowledged'" class="fas fa-check text-success"></i>
                                </td>
                                <td>
                                    <button @click="selectThisRequest(coe, key)" data-toggle="modal" data-target="#modal-lg" class="btn btn-primary btn-sm">
                                        <i class="fas fa-search"></i>
                                    </button>
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
                <div v-if="coe.isRequestLoading" class="overlay">
                    <i class="fas fa-2x fa-spinner fa-spin"></i>
                </div>
                <div class="modal-header">
                    <h4 class="modal-title">COE Request of {{ selectedCOE.first_name }} {{ selectedCOE.last_name }}</h4>
                    <button id="modal-close" type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="form-group col-12">
                            <label>Date needed</label>
                            <input disabled v-model="selectedCOE.date_needed" type="date" class="form-control form-control-sm">
                        </div>
                        <div class="form-group col-12">
                            <label>Reason</label>
                            <textarea disabled v-model="selectedCOE.reason" cols="30" rows="10" class="form-control form-control-sm"></textarea>
                        </div>
                        <div class="form-group col-12">
                            <input disabled v-model="selectedCOE.compensation" type="checkbox"> <i>Please check if we need to indicate your compensation</i>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button @click="acknowledgeRequest(selectedCOE.id)" :disabled="selectedCOE.status == 'Acknowledged'" class="btn btn-success btn-block">Acknowledge</button>
                </div>
            </div>
            <!-- /.modal-content -->
        </div>
        <!-- /.modal-dialog -->
    </div>
</template>

<script lang="ts">
import { HumanResourceCOETypes, useHumanResourceCOEStore } from '@/store/hr/coe'
import { computed, defineComponent, onBeforeMount, ref } from 'vue'

export default defineComponent({
    setup() {
        const coe = useHumanResourceCOEStore();

        const coes = computed(() => coe.getAllFiledCoes);
        const selectedKey = ref(0);
        const selectedCOE = ref({
            id: 0,
            first_name: '',
            last_name: '',
            created_at: '',
            reason: '',
            status: '',
            compensation: false
        });

        const selectThisRequest = (coe : HumanResourceCOETypes, key : number) => {
            selectedCOE.value.id = coe.id;
            selectedCOE.value.first_name = coe.employee.first_name;
            selectedCOE.value.last_name = coe.employee.last_name;
            selectedCOE.value.created_at = coe.created_at;
            selectedCOE.value.reason = coe.reason;
            selectedCOE.value.compensation = coe.compensation ? true : false;
            selectedCOE.value.status = coe.status;
            selectedKey.value = key;
        }

        const acknowledgeRequest = async (requestId : number) => {
            await coe.approveSelectedCoe(requestId, selectedKey.value);
        }

        onBeforeMount(async () => {
            await coe.loadAllFiledCoes();
        })

        return {
            coe,
            coes,
            selectedCOE,
            selectThisRequest,
            acknowledgeRequest
        }
    },
})
</script>
