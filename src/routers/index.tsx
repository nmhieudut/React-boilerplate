import { Suspense, lazy } from 'react'
import { Switch, Route } from 'react-router-dom'
import { routes } from 'constants/route'

export default function Routers() {
  return (
    <Suspense fallback={<div className="text-center">Loading...</div>}>
      <Switch>
        {routes.map((route, i) => {
          return (
            <Route
              key={i}
              exact={route.exact}
              path={`/${route.path}`}
              component={lazy(() => import(`core/${route.componentPath}`))}
            />
          )
        })}
      </Switch>
    </Suspense>
  )
}
