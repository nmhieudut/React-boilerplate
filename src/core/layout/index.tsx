import { Suspense, lazy } from 'react'
import Header from './Header'
import Container from './Container'

export const Layout = () => {
  const Footer = lazy(() => import('./Footer'))
  return (
    <>
      <Header />
      <Suspense
        fallback={<div className="mt-12 flex justify-center">Loading...</div>}
      >
        <Container />
        <Footer />
      </Suspense>
    </>
  )
}
