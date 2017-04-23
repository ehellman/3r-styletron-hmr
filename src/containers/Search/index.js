import React, { Component } from 'react'
import { connect } from 'react-redux'
import Header from 'components/Header'
import ShowCard from 'components/ShowCard'

class Search extends Component {
  render () {
    return (
      <div className='search'>
        <Header showSearch />
        <div>
          {this.props.shows
            .filter(show => `${show.title} ${show.description}`
              .toUpperCase()
              .indexOf(this.props.searchTerm.toUpperCase()) >= 0
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

const { arrayOf, shape, string } = React.PropTypes
Search.propTypes = {
  shows: arrayOf(shape({
    title: string,
    description: string,
    imdbID: string
  })),
  searchTerm: string
}

const mapStateToProps = (state) => {
  return {
    searchTerm: state.searchTerm
  }
}

export default connect(mapStateToProps)(Search)
// stopped at 50 - 02:00
// just got webpack to accept image urls by adding publicPath for '/dist'
// read more about this part before deleting this comment, then put the relevant
// info as a comment in the webpack file
