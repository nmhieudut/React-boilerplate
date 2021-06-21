interface INavMenu {
  path: string
  children: string
}

export const navMenu: INavMenu[] = [
  {
    path: '/blog',
    children: 'blog',
  },
  {
    path: '/docs',
    children: 'docs',
  },
  {
    path: '/contact',
    children: 'contact',
  },
]
