import React, { Component } from 'react'
/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
/* Router
/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Landing from 'components/Landing'
import Search from 'containers/Search'

// If you use React Router, make this component
// render <Router> with your routes. Currently,
// only synchronous routes are hot reloaded, and
// you will see a warning from <Router> on every reload.
// You can ignore this warning. For details, see:
// https://github.com/reactjs/react-router/issues/2182

export default class App extends Component {
  render () {
    return (
      <Router>
        <div className='app'>
          <Route exactly path='/' component={Landing} />
          <Route path='/search' component={Search} />
        </div>
      </Router>
    )
  }
}
