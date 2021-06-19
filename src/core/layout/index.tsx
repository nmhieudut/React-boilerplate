import Container from './Container'
import Header from './Header'
import { BrowserRouter } from 'react-router-dom'

export const Layout = () => {
  return (
    <BrowserRouter>
      <div className="max-w-screen-2xl mx-auto">
        <div className="wrapper pt-6 px-20">
          <Header />
          <Container />
        </div>
      </div>
    </BrowserRouter>
  )
}
