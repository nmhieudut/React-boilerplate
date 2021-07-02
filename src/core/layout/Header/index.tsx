import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { SignInAction } from 'store/auth'
import { RootState } from 'store/reducers'
import { navMenu } from 'constants/navbar'
import t from 'core/utils/translation'
import { Divide as Hamburger } from 'hamburger-react'
export interface IHeaderProps {}

export default function Header(props: IHeaderProps) {
  const [showLinks, setShowLinks] = useState(false)
  const dispatch = useDispatch()
  // const isLoading = useSelector((state: RootState) => state.auth.isLoading)
  const onLogin = () => {
    const config = {
      username: 'eve.holt@reqres.in',
      password: 'cityslicka',
    }
    dispatch(SignInAction(config))
  }

  return (
    <div className="flex items-center">
      <Link to="#" className="header-logo mr-24">
        Logo
      </Link>
      <div
        className="flex justify-center items-center ml-auto menu-collapse"
        id={showLinks ? 'hidden' : ''}
      >
        <div className="flex menu-collapse-links">
          <Link className="menu-item" to="/home">
            {t('content.menu.home')}
          </Link>
          {navMenu.map((item, i) => {
            return (
              <Link key={i} className="menu-item ml-14" to={item.page_path}>
                {t(`content.menu.${item.children}`)}
              </Link>
            )
          })}
        </div>
        <div className="auth-menu">
          <Link onClick={onLogin} className="btn btn-transparent" to="#">
            {t('content.menu.login')}
          </Link>
          <Link className="btn btn-primary" to="#">
            {t('content.menu.signup')}
          </Link>
        </div>
      </div>
      <button
        className="ml-auto close-collapse-icon"
        onClick={() => setShowLinks(!showLinks)}
      >
        <Hamburger direction="right" />
      </button>
      
    </div>
  )
}
