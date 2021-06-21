interface INavMenu {
  path: string
  children: string
}

export const navMenu: INavMenu[] = [
  {
    path: '/blog',
    children: 'Blog',
  },
  {
    path: '/docs',
    children: 'Docs',
  },
  {
    path: '/contact',
    children: 'Contact',
  },
]
