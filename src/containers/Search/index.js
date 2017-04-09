import React, { Component } from 'react'

import preload from 'data.json'

import ShowCard from 'components/ShowCard'
console.log(preload)

// {/* <pre><code>{JSON.stringify(preload, null, 4)}</code></pre> */}

export default class Search extends Component {
  constructor (props) {
    super(props)
    this.state = {
      searchTerm: ''
    }
    this.handleSearchTermChange = this.handleSearchTermChange.bind(this)
  }
  handleSearchTermChange (event) {
    this.setState({
      searchTerm: event.target.value
    })
  }
  render () {
    return (
      <div className='search'>
        <header>
          <h1>svideo</h1>
          <input
            value={this.state.searchTerm}
            onChange={this.handleSearchTermChange}
            type='text'
            placeholder='search'
          />
        </header>
        <div>
          {preload.shows
            .filter(show => `${show.title} ${show.description}`
              .toUpperCase()
              .indexOf(this.state.searchTerm.toUpperCase()) >= 0
            )
            .map(show => {
              return (
                <ShowCard key={show.imdbID} {...show} />
              )
            }
          )}
        </div>
      </div>
    )
  }
}

// stopped at 28 - 01:00
// just got webpack to accept image urls by adding publicPath for '/dist'
// read more about this part before deleting this comment, then put the relevant
// info as a comment in the webpack file
