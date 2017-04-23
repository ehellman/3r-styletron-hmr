import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from 'store'
/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
/* Router
/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Landing from 'components/Landing'
import Search from 'containers/Search'
import Details from 'containers/Details'

import preload from 'data.json'

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
        <Provider store={store}>
          <div className='app'>
            <Route exactly path='/' component={Landing} />
            <Route
              path='/search'
              component={props =>
                <Search shows={preload.shows} {...props} />
              }
            />
            <Route
              path='/details/:id'
              component={props => {
                const shows = preload.shows.filter(show =>
                  props.match.params.id === show.imdbID)
                // if filter returns none, do not return component, return redirect 404
                return (
                  <Details show={shows[0]} {...props} />
                )
              }}
            />
          </div>
        </Provider>
      </Router>
    )
  }
}
