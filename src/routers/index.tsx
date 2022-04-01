import { Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import { routes } from 'constants/route'

export default function Routers() {
  return (
    <Suspense fallback={<div className="text-center">Loading...</div>}>
      <Routes>
        {routes.map((route, i) => {
          return (
            <Route
              key={i}
              path={`/${route.path}`}
              element={lazy(() => import(`core/${route.componentPath}`))}
            />
          )
        })}
      </Routes>
    </Suspense>
  )
}
