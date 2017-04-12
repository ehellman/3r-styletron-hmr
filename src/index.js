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

// when you get to Redux, check out
// https://github.com/nganbread/bare-minimum-react-hot-rr4-redux

// code splitting
// https://github.com/ModusCreateOrg/react-dynamic-route-loading-es6
// http://moduscreate.com/code-splitting-for-react-router-with-es6-imports/
// https://medium.com/@addyosmani/progressive-web-apps-with-react-js-part-2-page-load-performance-33b932d97cf2
