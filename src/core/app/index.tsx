import React from 'react'
import store from 'store'
import { Provider } from 'react-redux'
import { Layout } from 'core/layout'
import i18n from 'plugins/i18n'
import { I18nextProvider } from 'react-i18next'
require('dotenv').config()

const App: React.FC = () => {
  return (
    <I18nextProvider i18n={i18n}>
      <Provider store={store}>
        <Layout />
      </Provider>
    </I18nextProvider>
  )
}

export default App
