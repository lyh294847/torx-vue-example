import {
  BasicLayoutComponent, LoginComponent, UserManagementComponent, RoleManagementComponent
  , ResourceManagementComponent, ParameterManagementComponent
} from 'torx-vue'
import { Document, Location, Setting } from '@element-plus/icons-vue'
import { markRaw } from 'vue'

export const routes = [
  {
    path: '/',
    redirect: '/dashboard',
    component: BasicLayoutComponent,
    children: [
      {
        path: '/dashboard',
        name: 'Dashboard',
        component: () => import('@/views/dashboard/index.vue'),
        meta: {
          title: '仪表盘',
          icon: markRaw(Document),
        }
      },
    ],
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginComponent,
    meta: {
      hidden: true,
    }
  },
  {
    path: '/system',
    name: 'System',
    component: BasicLayoutComponent,
    redirect: '/system/user',
    meta: {
      title: '系统管理',
      icon: markRaw(Location),
      hidden: false,
      // 必须要子级，否则不显示
      needChildren: true
    },
    children: [
      {
        path: 'user',
        name: 'User',
        component: UserManagementComponent,
        meta: {
          title: '用户管理',
          hidden: false,
          resources: ['admin:user']
        }
      },
      {
        path: 'role',
        name: 'Role',
        component: RoleManagementComponent,
        meta: {
          title: '角色管理',
          hidden: false,
          resources: ['admin:role']
        }
      }
    ]
  },
  {
    path: '/developer',
    name: 'Developer',
    component: BasicLayoutComponent,
    redirect: '/developer/resource',
    meta: {
      title: '开发者中心',
      icon: markRaw(Location),
      hidden: false,
      needChildren: true
    },
    children: [
      {
        path: 'resource',
        name: 'Resource',
        component: ResourceManagementComponent,
        meta: {
          title: '资源管理',
          icon: markRaw(Location),
          hidden: false,
          resources: ['admin:resource']
        }
      },
      {
        path: 'parameter',
        name: 'Parameter',
        component: ParameterManagementComponent,
        meta: {
          title: '参数管理',
          icon: markRaw(Setting),
          hidden: false,
          resources: ['admin:parameter']
        }
      }
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/views/404.vue'),
    meta: {
      hidden: true,
    }
  }
]