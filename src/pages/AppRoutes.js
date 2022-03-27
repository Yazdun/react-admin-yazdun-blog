import { Page404, Create, Dashboard, Draft, Login, Messages } from './'

export const AppRoutes = [
  {
    exact: true,
    path: '/',
    component: Login,
  },
  {
    exact: true,
    path: '/create',
    component: Create,
    private: true,
  },
  {
    exact: true,
    path: '/dashboard',
    component: Dashboard,
    private: true,
  },
  {
    exact: true,
    path: '/draft/:id',
    component: Draft,
    private: true,
  },
  {
    exact: true,
    path: '/messages',
    component: Messages,
    private: true,
  },
  {
    path: '*',
    component: Page404,
  },
]
