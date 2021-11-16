import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import AuthLayout from '../components/layouts/AuthLayout.vue'
import SuperadminLayout from '../components/layouts/SuperadminLayout.vue'
import EmployeeLayout from '../components/layouts/EmployeeLayout.vue'
import SupervisorLayout from '../components/layouts/SupervisorLayout.vue'
import HumanResourceLayout from '../components/layouts/HumanResourceLayout.vue'
import AdminLayout from '../components/layouts/AdminLayout.vue'
import RegistrationLayout from '../components/layouts/RegistrationLayout.vue'

import { useAuthStore } from '@/store/auth'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'LoginPage',
    component: () => import(/* webpackChunkName: "login-page" */ '../views/auth/LoginPage.vue'),
    meta: {
      layout: AuthLayout
    }
  },
  {
    path: '/register',
    name: 'RegisterPage',
    component: () => import(/* webpackChunkName: "register-page" */ '../views/auth/RegisterPage.vue'),
    meta: {
      layout: AuthLayout
    }
  },
  {
    path: '/registration-form',
    name: 'RegistrationFormPage',
    component: () => import(/* webpackChunkName: "registration-form" */ '../views/auth/RegistrationFormPage.vue'),
    meta: {
      layout: RegistrationLayout
    }
  },
  {
    path: '/sa/dashboard',
    name: 'SaDashboard',
    component: () => import(/* webpackChunkName: "sa-dashboard" */ '../views/superadmin/DashboardPage.vue'),
    meta: {
      layout: SuperadminLayout
    }
  },
  {
    path: '/sa/leaves',
    name: 'SaLeaveRequest',
    component: () => import(/* webpackChunkName: "sa-leaves" */ '../views/superadmin/requests/LeaveRequestsPage.vue'),
    meta: {
      layout: SuperadminLayout
    }
  },
  {
    path: '/sa/overtimes',
    name: 'SaOvertimeRequest',
    component: () => import(/* webpackChunkName: "sa-overtimes" */ '../views/superadmin/requests/OvertimeRequestsPage.vue'),
    meta: {
      layout: SuperadminLayout
    }
  },
  {
    path: '/sa/trips',
    name: 'SaTripRequest',
    component: () => import(/* webpackChunkName: "sa-trips" */ '../views/superadmin/requests/BusinessTripRequestPage.vue'),
    meta: {
      layout: SuperadminLayout
    }
  },
  {
    path: '/sa/branches',
    name: 'SaBranches',
    component: () => import(/* webpackChunkName: "sa-branches" */ '../views/superadmin/settings/BranchesPage.vue'),
    meta: {
      layout: SuperadminLayout
    }
  },
  {
    path: '/sa/departments',
    name: 'SaDepartments',
    component: () => import(/* webpackChunkName: "sa-departments" */ '../views/superadmin/settings/DepartmentPage.vue'),
    meta: {
      layout: SuperadminLayout
    }
  },
  {
    path: '/sa/roles',
    name: 'SaRoles',
    component: () => import(/* webpackChunkName: "sa-roles" */ '../views/superadmin/settings/RolePage.vue'),
    meta: {
      layout: SuperadminLayout
    }
  },
  {
    path: '/sa/user/:id',
    name: 'SaUser',
    component: () => import(/* webpackChunkName: "sa-user" */ '../views/superadmin/SelectedUserPage.vue'),
    meta: {
      layout: SuperadminLayout
    }
  },
  {
    path: '/em/dashboard',
    name: 'EmDashboard',
    component: () => import(/* webpackChunkName: "em-dashboard'" */ '../views/employee/DashboardPage.vue'),
    meta: {
      layout: EmployeeLayout
    }
  },
  {
    path: '/em/leaves',
    name: 'EmLeaves',
    component: () => import(/* webpackChunkName: "em-leaves'" */ '../views/employee/requests/LeaveRequestPage.vue'),
    meta: {
      layout: EmployeeLayout
    }
  },
  {
    path: '/em/leaves/create',
    name: 'EmLeavesCreate',
    component: () => import(/* webpackChunkName: "em-leaves-create'" */ '../views/employee/requests/LeaveCreateRequestPage.vue'),
    meta: {
      layout: EmployeeLayout
    }
  },
  {
    path: '/em/leaves/edit/:id',
    name: 'EmLeavesEdit',
    component: () => import(/* webpackChunkName: "em-leaves-create'" */ '../views/employee/requests/LeaveShowRequestPage.vue'),
    meta: {
      layout: EmployeeLayout
    }
  },
  {
    path: '/em/overtimes',
    name: 'EmOvertimes',
    component: () => import(/* webpackChunkName: "em-overtimes'" */ '../views/employee/requests/OvertimeRequestPage.vue'),
    meta: {
      layout: EmployeeLayout
    }
  },
  {
    path: '/em/overtimes/create',
    name: 'EmOvertimesCreate',
    component: () => import(/* webpackChunkName: "em-overtimes-create'" */ '../views/employee/requests/OvertimeCreateRequestPage.vue'),
    meta: {
      layout: EmployeeLayout
    }
  },
  {
    path: '/em/overtimes/:id',
    name: 'EmOvertimesEdit',
    component: () => import(/* webpackChunkName: "em-overtimes-edit'" */ '../views/employee/requests/OvertimeShowRequestPage.vue'),
    meta: {
      layout: EmployeeLayout
    }
  },
  {
    path: '/em/trips',
    name: 'EmTrips',
    component: () => import(/* webpackChunkName: "em-trips'" */ '../views/employee/requests/TripRequestPage.vue'),
    meta: {
      layout: EmployeeLayout
    }
  },
  {
    path: '/em/coe',
    name: 'EmCOE',
    component: () => import(/* webpackChunkName: "em-coe'" */ '../views/employee/requests/COERequestPage.vue'),
    meta: {
      layout: EmployeeLayout
    }
  },
  {
    path: '/sv/dashboard',
    name: 'SvDashboard',
    component: () => import(/* webpackChunkName: "sv-dashboard" */ '../views/supervisor/DashboardPage.vue'),
    meta: {
      layout: SupervisorLayout
    }
  },
  {
    path: '/sv/leaves',
    name: 'SvLeaves',
    component: () => import(/* webpackChunkName: "sv-leaves'" */ '../views/supervisor/requests/LeaveRequestPage.vue'),
    meta: {
      layout: SupervisorLayout
    }
  },
  {
    path: '/sv/overtimes',
    name: 'SvOvertimes',
    component: () => import(/* webpackChunkName: "sv-overtimes'" */ '../views/supervisor/requests/OvertimeRequestPage.vue'),
    meta: {
      layout: SupervisorLayout
    }
  },
  {
    path: '/sv/trips',
    name: 'SvTrips',
    component: () => import(/* webpackChunkName: "sv-trips'" */ '../views/supervisor/requests/TripRequestPage.vue'),
    meta: {
      layout: SupervisorLayout
    }
  },
  {
    path: '/sv/coe',
    name: 'SvCOE',
    component: () => import(/* webpackChunkName: "sv-coe'" */ '../views/supervisor/requests/COERequestPage.vue'),
    meta: {
      layout: SupervisorLayout
    }
  },
  {
    path: '/sv/subs/leaves',
    name: 'SvSubsLeaves',
    component: () => import(/* webpackChunkName: "sv-subs-leaves'" */ '../views/supervisor/subs_requests/LeaveRequestPage.vue'),
    meta: {
      layout: SupervisorLayout
    }
  },
  {
    path: '/sv/subs/overtimes',
    name: 'SvSubsOvertimes',
    component: () => import(/* webpackChunkName: "sv-subs-overtimes'" */ '../views/supervisor/subs_requests/OvertimeRequestPage.vue'),
    meta: {
      layout: SupervisorLayout
    }
  },
  {
    path: '/hr/dashboard',
    name: 'HrDashboard',
    component: () => import(/* webpackChunkName: "hr-dashboard" */ '../views/humanresource/DashboardPage.vue'),
    meta: {
      layout: HumanResourceLayout
    }
  },
  {
    path: '/hr/leaves',
    name: 'HrLeaves',
    component: () => import(/* webpackChunkName: "hr-leaves" */ '../views/humanresource/requests/LeaveRequestPage.vue'),
    meta: {
      layout: HumanResourceLayout
    }
  },
  {
    path: '/hr/overtimes',
    name: 'HrOvertimes',
    component: () => import(/* webpackChunkName: "hr-overtimes" */ '../views/humanresource/requests/OvertimeRequestPage.vue'),
    meta: {
      layout: HumanResourceLayout
    }
  },
  {
    path: '/hr/trips',
    name: 'HrTrips',
    component: () => import(/* webpackChunkName: "hr-trips" */ '../views/humanresource/requests/BusinessTripRequestPage.vue'),
    meta: {
      layout: HumanResourceLayout
    }
  },
  {
    path: '/hr/coes',
    name: 'HrCOE',
    component: () => import(/* webpackChunkName: "hr-coe" */ '../views/humanresource/requests/COERequestPage.vue'),
    meta: {
      layout: HumanResourceLayout
    }
  },
  {
    path: '/ad/dashboard',
    name: 'AdDashboard',
    component: () => import(/* webpackChunkName: "ad-dashboard" */ '../views/administrator/DashboardPage.vue'),
    meta: {
      layout: AdminLayout
    }
  },
  {
    path: '/ad/e/leaves',
    name: 'AdEmpLeaves',
    component: () => import(/* webpackChunkName: "ad-emp-leaves" */ '../views/administrator/leaves/EmployeeLeavePage.vue'),
    meta: {
      layout: AdminLayout
    }
  },
  {
    path: '/ad/e/overtimes',
    name: 'AdEmpOvertimes',
    component: () => import(/* webpackChunkName: "ad-emp-overtimes" */ '../views/administrator/overtimes/EmployeeOvertimePage.vue'),
    meta: {
      layout: AdminLayout
    }
  },
  {
    path: '/ad/e/trips',
    name: 'AdEmpTrips',
    component: () => import(/* webpackChunkName: "ad-emp-trips" */ '../views/administrator/trips/EmployeeTripPage.vue'),
    meta: {
      layout: AdminLayout
    }
  },
  {
    path: '/ad/s/leaves',
    name: 'AdSvLeaves',
    component: () => import(/* webpackChunkName: "ad-sv-leaves" */ '../views/administrator/leaves/SupervisorLeavePage.vue'),
    meta: {
      layout: AdminLayout
    }
  },
  {
    path: '/ad/s/overtimes',
    name: 'AdSvOvertimes',
    component: () => import(/* webpackChunkName: "ad-sv-overtimes" */ '../views/administrator/overtimes/SupervisorOvertimePage.vue'),
    meta: {
      layout: AdminLayout
    }
  },
  {
    path: '/ad/s/trips',
    name: 'AdSvTrips',
    component: () => import(/* webpackChunkName: "ad-sv-trips" */ '../views/administrator/trips/SupervisorTripPage.vue'),
    meta: {
      layout: AdminLayout
    }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.name !== 'LoginPage' && !useAuthStore().isAuthenticated) {
    if (to.name == 'RegisterPage') {
      next();
    } else {
      next({ name: 'LoginPage' })
    }
  } else {
    next();
  }
});

export default router
