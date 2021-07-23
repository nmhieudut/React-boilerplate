import store from 'store'
import { Provider } from 'react-redux'
import { Layout } from 'core/layout'
import { withTranslation, I18nextProvider } from 'react-i18next'
import i18n from 'plugins/i18n'
import { useDarkMode } from 'hooks/useDarkMode'
import {
  GlobalStyles,
  lightTheme,
  darkTheme,
} from 'core/components/styled/GlobalStyles'
import { ThemeProvider } from 'styled-components'
import DarkMode from 'core/components/common/DarkMode'
require('dotenv').config()

const App: React.FC = () => {
  console.log('======> App is on', process.env.NODE_ENV)
  const [theme, toggleTheme] = useDarkMode()
  const themeMode = theme === 'light' ? lightTheme : darkTheme
  return (
    <ThemeProvider theme={themeMode}>
      <I18nextProvider i18n={i18n}>
        <Provider store={store}>
          <DarkMode theme={theme} toggleTheme={toggleTheme} />
          <GlobalStyles />
          <Layout />
        </Provider>
      </I18nextProvider>
    </ThemeProvider>
  )
}

export default withTranslation()(App)
