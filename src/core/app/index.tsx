import React from 'react'
import store from 'store'
import { Provider } from 'react-redux'
import { Layout } from 'core/layout'
require('dotenv').config()

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Layout />
    </Provider>
  )
}

export default App
