import {
  BrowserRouter,
  Navigate,
  Route,
  Routes as RoutesComponent,
} from 'react-router'
import { PUBLIC_ROUTES, ROOT_PATH } from './routes.constants'

export function Routes() {
  return (
    <BrowserRouter>
      <RoutesComponent>
        {PUBLIC_ROUTES.map((route) => (
          <Route
            key={route.key}
            path={route.path}
            element={<route.element />}
          />
        ))}
        <Route path="*" element={<Navigate to={ROOT_PATH} replace />} />
      </RoutesComponent>
    </BrowserRouter>
  )
}
