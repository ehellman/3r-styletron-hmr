/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
/* Imports
/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
import { AppContainer } from 'react-hot-loader'
import React from 'react'
import ReactDOM from 'react-dom'

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
/* Styletron
/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
import Styletron from 'styletron-client'
import { StyletronProvider } from 'styletron-react'

const styleSheet = document.createElement('style')
document.head.appendChild(styleSheet)
const styletron = new Styletron([styleSheet])

import App from 'containers/App'

const render = (Component) =>
  ReactDOM.render(
    <AppContainer>
      <StyletronProvider styletron={styletron}>
        <Component />
      </StyletronProvider>
    </AppContainer>,
    document.getElementById('root')
  )

render(App)
if (module.hot) module.hot.accept('containers/App', () => render(App))