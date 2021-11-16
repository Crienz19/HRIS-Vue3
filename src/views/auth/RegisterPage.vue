<template>
    <div class="register-box">
        <div class="register-logo">
            <img src="@/assets/zip_logo.png" class="mx-2" style="width: 130px; height: 130px;"  alt="zip_logo">
            <img src="@/assets/hiap_logo.png" class="mx-2" style="width: 130px; height: 130px;"  alt="hiap_logo">
            <!-- <a href="../../index2.html"><b>ZIP-HRIS</b> HRIS</a> -->
        </div>

        <div class="card">
            <div v-if="auth.isRequestLoading" class="overlay">
                <i class="fas fa-spinner fa-pulse fa-2x"></i>
            </div>
            <div class="card-body register-card-body">
            <p class="login-box-msg">Register a new membership</p>

            <form @submit.prevent="register()">
                <div class="input-group mb-3">
                    <input :class="errors.hasOwnProperty('name') ? 'is-invalid' : ''" v-model="registerForm.name" type="text" class="form-control" placeholder="Full name">
                    <div class="input-group-append">
                        <div class="input-group-text">
                            <span class="fas fa-user"></span>
                        </div>
                    </div>
                </div>
                <div class="input-group mb-3">
                    <input :class="errors.hasOwnProperty('email') ? 'is-invalid' : ''" v-model="registerForm.email" type="email" class="form-control" placeholder="Email">
                    <div class="input-group-append">
                        <div class="input-group-text">
                        <span class="fas fa-envelope"></span>
                        </div>
                    </div>
                </div>
                <div class="input-group mb-3">
                <input :class="errors.hasOwnProperty('password') ? 'is-invalid' : ''" v-model="registerForm.password" type="password" class="form-control" placeholder="Password">
                <div class="input-group-append">
                    <div class="input-group-text">
                    <span class="fas fa-lock"></span>
                    </div>
                </div>
                </div>
                <div class="input-group mb-3">
                <input :class="errors.hasOwnProperty('password_confirmation') ? 'is-invalid' : ''" v-model="registerForm.password_confirmation" type="password" class="form-control" placeholder="Retype password">
                <div class="input-group-append">
                    <div class="input-group-text">
                    <span class="fas fa-lock"></span>
                    </div>
                </div>
                </div>
                <div class="row">
                <!-- <div class="col-8">
                    <div class="icheck-primary">
                    <input type="checkbox" id="agreeTerms" name="terms" value="agree">
                    <label for="agreeTerms">
                    I agree to the <a href="#">terms</a>
                    </label>
                    </div>
                </div> -->
                <!-- /.col -->
                <div class="col-12">
                    <button type="submit" class="btn btn-primary btn-block">Register</button>
                    <button @click="goToLoginPage()" type="button" class="btn btn-success btn-block">Login to account</button>
                </div>
                <!-- /.col -->
                </div>
            </form>

            <!-- <div class="social-auth-links text-center">
                <p>- OR -</p>
                <a href="#" class="btn btn-block btn-primary">
                <i class="fab fa-facebook mr-2"></i>
                Sign up using Facebook
                </a>
                <a href="#" class="btn btn-block btn-danger">
                <i class="fab fa-google-plus mr-2"></i>
                Sign up using Google+
                </a>
            </div> -->

            <!-- <router-link to="/" tag="a" class="text-center">I already have a membership</router-link> -->
            </div>
            <!-- /.form-box -->
        </div><!-- /.card -->
    </div>
</template>

<script lang="ts">
import { useAuthStore } from '@/store/auth';
import { computed, defineComponent, reactive } from 'vue'
import { useRouter } from 'vue-router';

export default defineComponent({
    setup() {
        const auth = useAuthStore();
        const router = useRouter();
        const registerForm = reactive({
            name: null,
            email: null,
            password: null,
            password_confirmation: null
        });

        const errors = computed(() => auth.getAllErrors);

        const register = async () => {
            try {
                await auth.registerThisData(registerForm);
                await router.push('/');
                alert('Your registration request sent to superadmin.');
            } catch (error) {
                alert(auth.getErrorMessage);
            }
        }

        const goToLoginPage = () => {
            router.push('/');
        }

        return {
            auth,
            errors,
            registerForm,
            register,
            goToLoginPage
        }
    },
})
</script>
