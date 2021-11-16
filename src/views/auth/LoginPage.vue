<template>
    <div class="login-box">
        <div class="login-logo">
            <img src="@/assets/zip_logo.png" class="mx-2" style="width: 130px; height: 130px;"  alt="zip_logo">
            <img src="@/assets/hiap_logo.png" class="mx-2" style="width: 130px; height: 130px;"  alt="hiap_logo">
            <!-- <a href="../../index2.html"><b>ZIP-HIAP</b> HRIS</a> -->
        </div>
        <!-- /.login-logo -->
        <div class="card">
            <div v-if="auth.isRequestLoading" class="overlay">
                <i class="fas fa-spinner fa-pulse fa-2x"></i>
            </div>
            <div class="card-body login-card-body">
            <p class="login-box-msg">Sign in to start your session</p>

            <div v-if="errorMessage" class="alert alert-danger alert-dismissable">
                <button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>
                <small>{{ errorMessage }}</small>
            </div>

            <form @submit.prevent="login()">
                <div class="input-group mb-3">
                    <input :class="errors.hasOwnProperty('username') ? 'is-invalid' : ''" v-model="loginForm.username" type="text" class="form-control" placeholder="Username">
                    <div class="input-group-append">
                        <div class="input-group-text">
                        <span class="fas fa-user"></span>
                        </div>
                    </div>
                </div>
                <i class="text-sm text-danger" v-if="errors.hasOwnProperty('username')">{{ errors.username[0] }}</i>

                <div class="input-group mb-3">
                    <input :class="errors.hasOwnProperty('password') ? 'is-invalid' : ''" v-model="loginForm.password" type="password" class="form-control" placeholder="Password">
                    <div class="input-group-append">
                        <div class="input-group-text">
                        <span class="fas fa-lock"></span>
                        </div>
                    </div>
                </div>
                <i class="text-sm text-danger" v-if="errors.hasOwnProperty('password')">{{ errors.password[0] }}</i>

                <div class="row">
                <div class="col-8">
                    <div class="icheck-primary">
                    <!-- <input v-model="loginForm.rememberMe" type="checkbox" id="remember">
                    <label for="remember">
                        Remember Me
                    </label> -->
                    </div>
                </div>
                <!-- /.col -->
                <div class="col-12">
                    <button type="submit" class="btn btn-primary btn-block">Login</button>
                    <button @click="registration" type="button" class="btn btn-success btn-block">Register an account</button>
                </div>
                <!-- /.col -->
                </div>
            </form>

            <!-- <div class="social-auth-links text-center mb-3">
                <a href="#" class="btn btn-block btn-primary">
                <i class="fab fa-facebook mr-2"></i> Sign in using Facebook
                </a>
                <a href="#" class="btn btn-block btn-danger">
                <i class="fab fa-google-plus mr-2"></i> Sign in using Google+
                </a>
            </div> -->
            <!-- /.social-auth-links -->

            <!-- <p class="mb-1">
                <a href="forgot-password.html">I forgot my password</a>
            </p>
            <p class="mb-0">
                <router-link to="/register" tag="a" class="text-center">Register a new membership</router-link>
            </p> -->
            </div>
            <!-- /.login-card-body -->
        </div>
    </div>
</template>

<script lang="ts">
import { computed, defineComponent, reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/store/auth'

export default defineComponent({
    setup() {
        const auth = useAuthStore();
        const router = useRouter();
        const loginForm = reactive({
            username: null,
            password: null,
            rememberMe: false
        });
        const isLoading = ref(false);
        const errors = computed(() => auth.getAllErrors);
        const errorMessage = computed(() => auth.getErrorMessage);

        const login = async () => {
            await auth.logUserIn(loginForm);
            await auth.loadLoggedUser();
            switch(auth.getAuthenticatedUser.role) {
                case 'superadministrator':
                    await router.push('/sa/dashboard');
                break;
                
                case 'supervisor':
                    if (auth.getAuthenticatedUser.isFilled) {
                        await router.push('/sv/dashboard');
                    } else {
                        await router.push('/registration-form');
                    }
                break;

                case 'employee':
                    if (auth.getAuthenticatedUser.isFilled) {
                        await router.push('/em/dashboard');
                    } else {
                        await router.push('/registration-form');
                    }
                break;

                case 'hr':
                    await router.push('/hr/dashboard');
                break;

                case 'administrator':
                    await router.push('/ad/dashboard');
                break;
            }
        }

        const registration = async () => {
            await router.push('/register')
        }

        return {
            auth,
            errors,
            errorMessage,
            loginForm,
            isLoading,
            login,
            registration
        }
    },
})
</script>
