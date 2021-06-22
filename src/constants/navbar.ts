interface INavMenu {
  page_path: string
  children: string
}

export const navMenu: INavMenu[] = [
  {
    page_path: '/blog',
    children: 'blog',
  },
  {
    page_path: '/docs',
    children: 'docs',
  },
  {
    page_path: '/contact',
    children: 'contact',
  },
]
