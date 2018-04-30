// import lib
import Loadable from 'react-loadable'

// import components
import LoadingComponent from '../../common/loader'

const routes = [
  {
    path: '/',
    exact: true,
    component: Loadable({
      loader: () => import('./pages/home'),
      loading: LoadingComponent,
    }),
  },
  {
    path: '/posts',
    exact: true,
    component: Loadable({
      loader: () => import('./pages/posts/list'),
      loading: LoadingComponent,
    }),
  },
  {
    path: '/posts/:slug',
    exact: true,
    component: Loadable({
      loader: () => import('./pages/posts/details'),
      loading: LoadingComponent,
    }),
  },
]

export default routes
