interface Router {
  path: string;
  exact: boolean;
  componentPath: string;
}

export const routes: Router[] = [
  {
    path: 'home',
    exact: true,
    componentPath: 'pages/Home'
  },
  // {
  //   path: 'login',
  //   exact: true,
  //   componentPath: 'core/pages/Login'
  // },
  // test-dev-area
  // {
  //   path: 'sandbox',
  //   exact: true,
  //   componentPath: 'core/components/uncommon/Sandbox'
  // }
];
