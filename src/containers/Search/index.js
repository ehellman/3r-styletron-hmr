import React, { Component } from 'react'

import preload from 'data.json'
console.log(preload)

import {
  Container
} from './style.js'
// {/* <pre><code>{JSON.stringify(preload, null, 4)}</code></pre> */}

export default class Search extends Component {
  render () {
    return (
      <div className='search'>
        <Container color='red'>
          {preload.shows.map(show => {
            return (
              <div className='show-card' key={show.imdbID}>
                <img src={`/dist/img/posters/${show.poster}`} />
              </div>
            )
          })}
        </Container>
      </div>
    )
  }
}

// stopped at 28 - 01:00
// just got webpack to accept image urls by adding publicPath for '/dist'
// maybe read more about that part and comment before proceeding?
