import React, { Component } from 'react'
const { arrayOf, shape, string } = React.PropTypes

import Header from 'components/Header'
import ShowCard from 'components/ShowCard'

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
        <Header
          showSearch
          searchTerm={this.state.searchTerm}
          handleSearchTermChange={this.handleSearchTermChange}
        />
        <div>
          {this.props.shows
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

Search.propTypes = {
  shows: arrayOf(shape({
    title: string,
    description: string,
    imdbID: string
  }))
}

// stopped at 50 - 02:00
// just got webpack to accept image urls by adding publicPath for '/dist'
// read more about this part before deleting this comment, then put the relevant
// info as a comment in the webpack file
