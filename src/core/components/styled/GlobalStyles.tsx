import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    background: ${({ theme }: any) => theme.body};
    color: ${({ theme }: any) => theme.text};
  }
  h1,h2,h3,h4,h5,h6,a {
    color: ${({ theme }: any) => theme.text};
  }
  .constrast-section {
    background-color:  ${({ theme }: any) => theme.constrast};
  }
  .menu-item:hover {
    color: ${({ theme }: any) => theme.text};
    text-decoration-color: ${({ theme }: any) => theme.text};
  }
  .footer-content__title {
    border-bottom-color: ${({ theme }: any) => theme.text} 
  }
  .toggle-icon {
    border-color: ${({ theme }: any) => theme.text} 
  }
`

export const lightTheme = {
  body: '#ffffff',
  text: '#0c1017',
  constrast: '#ececec',
}

export const darkTheme = {
  body: '#0c1017',
  text: '#fff',
  constrast: 'rgba(17, 24, 39, 1)',
}
