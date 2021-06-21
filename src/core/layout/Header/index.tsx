import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { SignInAction } from 'store/auth'
import { RootState } from 'store/reducers'
import { navMenu } from 'constants/navMenu'
import t from 'core/utils/translation'
export interface IHeaderProps {}

export default function Header(props: IHeaderProps) {
  const dispatch = useDispatch()
  // const isLoading = useSelector((state: RootState) => state.auth.isLoading)
  const onLogin = () => {
    const config = {
      username: 'eve.holt@reqres.in',
      password: 'cityslicka',
    }
    dispatch(SignInAction(config))
  }
  console.log("Header render")
  return (
    <div className="flex items-center">
      <Link to="#" className="header-logo mr-24">
        Logo
      </Link>
      <div className="flex justify-center items-center ml-auto">
        <Link className="menu-item" to="/home">
          {t('content.menu.home')}
        </Link>
        {navMenu.map((item, i) => {
          return (
            <Link key={i} className="menu-item ml-20" to={item.path}>
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
  )
}
