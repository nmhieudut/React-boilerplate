import React, { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
import { routes } from './routes';

interface Props {}

export default function Routers(props: Props) {
  return (
      <Suspense fallback={<div className='text-center'>Loading...</div>}>
        <Switch>
          {routes.map((route, i) => {
            return (
              <Route
                key={i}
                exact={route.exact}
                path={`/${route.path}`}
                component={lazy(() => import(`core/${route.componentPath}`))}
              />
            );
          })}
        </Switch>
      </Suspense>
  );
}
