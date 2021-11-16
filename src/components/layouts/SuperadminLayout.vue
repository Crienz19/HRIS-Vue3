<template>
    <div class="wrapper">
        <nav class="main-header navbar navbar-expand navbar-dark">
    

    <!-- Right navbar links -->
    <ul class="navbar-nav ml-auto">
        <li class="nav-item">
            <a @click="logout" class="nav-link" data-widget="control-sidebar" data-slide="true" href="#" role="button"><i
                class="fas fa-sign-out-alt"></i></a>
        </li>
    </ul>
    </nav>
        <aside class="main-sidebar sidebar-dark-primary elevation-4">
    <!-- Brand Logo -->
    <a href="index3.html" class="brand-link">
        <img src="@/assets/logo.png" alt="AdminLTE Logo" class="brand-image img-circle elevation-3"
            style="opacity: .8">
        <span class="brand-text font-weight-light">HRIS</span>
    </a>

    <!-- Sidebar -->
    <div class="sidebar">
        <!-- Sidebar user panel (optional) -->
        <div class="user-panel mt-3 pb-3 mb-3 d-flex">
            <div class="image">
                <img src="@/assets/logo.png" class="img-circle elevation-2" alt="User Image">
            </div>
            <div class="info">
                Superadministrator
            </div>
        </div>

        <!-- Sidebar Menu -->
        <nav class="mt-2">
        <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu">
            <!-- Add icons to the links using the .nav-icon class
                with font-awesome or any other icon font library -->
            <li class="nav-item">
                <router-link tag="a" to="/sa/dashboard" class="nav-link" :class="(router.currentRoute.value.path === '/sa/dashboard') ? 'active' : ''">
                    <i class="nav-icon fas fa-tachometer-alt"></i>
                    <p>
                        Dashboard
                        <!-- <span class="right badge badge-danger">New</span> -->
                    </p>
                </router-link>
            </li>
            <!-- <li class="nav-item menu-open">
                <a href="#" class="nav-link">
                    <i class="nav-icon fas fa-layer-group"></i>
                    <p>
                        Programs
                        <i class="right fas fa-angle-left"></i>
                    </p>
                </a>
                <ul class="nav nav-treeview">
                    <li v-for="list in programList" :key="list.id" class="nav-item">
                        <router-link :to="`/sa/program/${list.id}`" class="nav-link" :class="(router.currentRoute.value.path === `/sa/program/${list.id}`) ? 'active' : ''">
                            <i class="far fa-circle nav-icon"></i>
                            <p>{{ list.name }}</p>
                        </router-link>
                    </li>
                </ul>
            </li>
            <li class="nav-item menu-open">
                <a href="#" class="nav-link">
                    <i class="nav-icon fas fa-cog"></i>
                    <p>
                        Settings
                        <i class="right fas fa-angle-left"></i>
                    </p>
                </a>
                <ul class="nav nav-treeview">
                    <li class="nav-item">
                        <router-link to="/sa/settings/schools" class="nav-link" :class="(router.currentRoute.value.path === '/sa/settings/schools') ? 'active' : ''">
                            <i class="far fa-circle nav-icon"></i>
                            <p>Schools</p>
                        </router-link>
                    </li>
                </ul>
            </li> -->
            <li class="nav-header">
                Timekeeping
            </li>
            <li class="nav-item">
                <router-link to="/sa/leaves" tag="a" class="nav-link" :class="(router.currentRoute.value.path === '/sa/leaves') ? 'active' : ''">
                    <i class="nav-icon fas fa-suitcase"></i>
                    <p>
                    Leave Requests
                    <!-- <span class="right badge badge-danger">New</span> -->
                    </p>
                </router-link>
            </li>
            <li class="nav-item">
                <router-link to="/sa/overtimes" tag="a" class="nav-link" :class="(router.currentRoute.value.path === '/sa/overtimes') ? 'active' : ''">
                    <i class="nav-icon fas fa-clock"></i>
                    <p>
                    Overtime Requests
                    </p>
                </router-link>
            </li>
            <li class="nav-item">
                <router-link to="/sa/trips" tag="a" class="nav-link" :class="(router.currentRoute.value.path === '/sa/trips') ? 'active' : ''">
                    <i class="nav-icon fas fa-business-time"></i>
                    <p>
                    Business Trip Requests
                    </p>
                </router-link>
            </li>
            <li class="nav-header">
                Settings
            </li>
            <li class="nav-item">
                <router-link to="/sa/branches" tag="a" class="nav-link">
                    <i class="nav-icon fas fa-store-alt"></i>
                    <p>
                    Branches
                    </p>
                </router-link>
            </li>
            <li class="nav-item">
                <router-link to="/sa/departments" tag="a" class="nav-link">
                    <i class="nav-icon fas fa-users"></i>
                    <p>
                    Department
                    </p>
                </router-link>
            </li>
            <li class="nav-item">
                <router-link to="/sa/roles" tag="a" href="#" class="nav-link">
                    <i class="nav-icon fas fa-user-cog"></i>
                    <p>
                    Role
                    </p>
                </router-link>
            </li>
        </ul>
        </nav>
        <!-- /.sidebar-menu -->
    </div>
    <!-- /.sidebar -->
        </aside>
        <div class="content-wrapper">
            <section class="content">
                <div class="container-fluid p-2">
                    <slot />
                </div>
            </section>
        </div>
    </div>
</template>

<script lang="ts">
import { useAuthStore } from '@/store/auth';
import { defineComponent, onBeforeMount } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
    setup() {
        const auth = useAuthStore();
        const router = useRouter();

        const logout = async () => {
            const res =  confirm('Logout?');
            if(res) {
                await auth.logUserOut();
                await router.push('/');
            }
        }

        onBeforeMount(() => {
            let body = document.body;
            body.className = '';
            body.classList.add('dark-mode', 'sidebar-mini', 'layout-fixed', 'layout-navbar-fixed', 'layout-footer-fixed');
        });

        return {
            router,
            logout
        }
    },
})
</script>
