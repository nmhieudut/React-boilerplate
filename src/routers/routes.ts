interface Router {
  path: string
  exact: boolean
  componentPath: string
  protected: false
}

export const routes: Router[] = [
  {
    path: 'home',
    exact: true,
    componentPath: 'pages/Home',
    protected: false,
  },
  {
    path: 'login',
    exact: true,
    componentPath: 'pages/Login',
    protected: false,
  },
  //test-dev-area
  {
    path: 'sandbox',
    exact: true,
    componentPath: 'components/uncommon/Sandbox',
    protected: false,
  },
]
