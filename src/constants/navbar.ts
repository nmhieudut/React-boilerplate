interface INavMenu {
  to: string
  label: string
}

export const navs: INavMenu[] = [
  {
    to: '/blog',
    label: 'blog',
  },
  {
    to: '/docs',
    label: 'docs',
  },
  {
    to: '/contact',
    label: 'contact',
  },
]
