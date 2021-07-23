import { useState, useEffect, useRef } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { SignInAction } from 'store/auth'
// import { RootState } from 'store/reducers'
// import logo from 'assets/logo.png'
import { navMenu } from 'constants/navbar'
import t from 'utils/translation'
import { HashLink } from 'react-router-hash-link'
import { Divide as Hamburger } from 'hamburger-react'

export default function Header() {
  const [showLinks, setShowLinks] = useState(false)
  // const dispatch = useDispatch()
  const wrapperRef = useRef<any>(null)
  // const isLoading = useSelector((state: RootState) => state.auth.isLoading)
  // const onLogin = () => {
  //   const config = {
  //     username: 'eve.holt@reqres.in',
  //     password: 'cityslicka',
  //   }
  //   dispatch(SignInAction(config))
  // }
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (!wrapperRef.current.contains(event.target)) {
        setShowLinks(false)
      }
    }
    if (showLinks) {
      document.addEventListener('click', handleClickOutside)
    }
    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [wrapperRef, showLinks])

  const scrollWithOffset = (el: HTMLElement) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset
    const yOffset = -100
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' })
  }

  return (
    <div className="flex items-center header-menu">
      {/* <HashLink
        scroll={(el) => scrollWithOffset(el)}
        to="/home#banner"
        className="flex text-white items-center header-logo mr-24 text-white-300"
      >
        <img src={logo} alt="" />
      </HashLink> */}
      <div
        className="lg:flex hidden justify-center items-center ml-auto menu-collapse"
        ref={wrapperRef}
      >
        <div className="flex menu-collapse-links">
          {navMenu.map((item, i) => {
            return (
              <HashLink
                scroll={(el) => scrollWithOffset(el)}
                onClick={() => setShowLinks(false)}
                key={i}
                className="menu-item ml-14"
                to={item.page_path}
              >
                {t(`header.menu.${item.children}`)}
              </HashLink>
            )
          })}
        </div>
        {/* <div className="flex auth-menu items-center auth-menu">
          <Link onClick={onLogin} className="btn btn-transparent" to="#">
            {t('header.menu.login')}
          </Link>
          <Link className="btn btn-primary" to="#">
            {t('header.menu.signup')}
          </Link>
        </div> */}
      </div>
      <div
        className={'collapse ' + (showLinks ? '' : 'collapse-close')}
        ref={wrapperRef}
      >
        <div className="flex menu-collapse-links">
          {navMenu.map((item, i) => {
            return (
              <HashLink
                scroll={(el) => scrollWithOffset(el)}
                onClick={() => setShowLinks(false)}
                key={i}
                className="menu-item ml-14"
                to={item.page_path}
              >
                {t(`header.menu.${item.children}`)}
              </HashLink>
            )
          })}
        </div>
      </div>
      <button
        ref={wrapperRef}
        id="close-icon"
        className="ml-auto toggle-icon my-5"
        onClick={() => setShowLinks(!showLinks)}
      >
        <Hamburger toggled={showLinks} direction="right" />
      </button>
    </div>
  )
}
