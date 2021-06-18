import React, { Suspense, lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { routes } from './routes';

interface Props {}

export default function Routers(props: Props) {
  return (
    <>
      <Suspense fallback={<div className='text-center'>Loading...</div>}>
        <Switch>
          {/* <Redirect exact from='/home' to={`/`} /> */}
          {routes.map((route, i) => {
            const component = lazy(() => import("core/" + route.componentPath));
            return (
              <Route
                key={i}
                exact={route.exact}
                path={`/${route.path}`}
                component={component}
              />
            );
          })}
        </Switch>
      </Suspense>
    </>
  );
}
