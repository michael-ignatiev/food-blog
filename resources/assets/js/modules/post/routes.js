// import lib
import Loadable from 'react-loadable'

// import components
import LoadingComponent from '../../common/loader'

export default [
  {
    path: '/posts',
    exact: true,
    auth: true,
    component: Loadable({
      loader: () => import('./pages/list'),
      loading: LoadingComponent,
    }),
  },
  {
    path: '/posts/create',
    exact: true,
    auth: true,
    component: Loadable({
      loader: () => import('./pages/add'),
      loading: LoadingComponent,
    }),
  },
  {
    path: '/posts/:id/edit',
    exact: true,
    auth: true,
    component: Loadable({
      loader: () => import('./pages/edit'),
      loading: LoadingComponent,
    }),
  },
]