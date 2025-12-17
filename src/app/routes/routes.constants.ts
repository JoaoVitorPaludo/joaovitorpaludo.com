import { Home } from '../../modules/home'

export const ROOT_PATH = '/'
export const HOME_PATH = '/home'

export const PUBLIC_ROUTES = [
  {
    path: ROOT_PATH,
    key: 'root',
    element: Home,
  },
  {
    path: HOME_PATH,
    key: 'home',
    element: Home,
  },
]
