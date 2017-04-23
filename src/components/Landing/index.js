import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { setSearchTerm } from 'actions'

class Landing extends React.Component {
  constructor (props, context) {
    super(props, context)
    this.handleSearchTermChange = this.handleSearchTermChange.bind(this)
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this)
  }
  handleSearchTermChange (event) {
    this.props.dispatch(setSearchTerm(event.target.value))
  }
  handleSearchSubmit (event) {
    event.preventDefault()
    console.log(this.context)
    this.context.router.transitionTo('/search')
  }
  render () {
    return (
      <div className='landing'>
        <h1>svideo</h1>
        <form onSubmit={this.handleSearchSubmit}>
          <input
            onChange={this.handleSearchTermChange}
            value={this.props.searchTerm}
            type='text'
            placeholder='Search' />
        </form>
        <Link to='search'>or Browse All</Link>
      </div>
    )
  }
}

const { string, func, object } = React.PropTypes
Landing.propTypes = {
  searchTerm: string,
  dispatch: func
}
Landing.contextTypes = {
  router: object
}

const mapStateToProps = (state) => {
  return {
    searchTerm: state.searchTerm
  }
}

export default connect(mapStateToProps)(Landing)
