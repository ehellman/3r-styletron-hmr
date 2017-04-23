import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setSearchTerm } from 'actions'
import { Link } from 'react-router-dom'

class Header extends Component {
  constructor (props) {
    super(props)
    this.handleSearchTermChange = this.handleSearchTermChange.bind(this)
  }
  handleSearchTermChange (event) {
    this.props.dispatch(setSearchTerm(event.target.value))
  }
  render () {
    let utilSpace
    this.props.showSearch
      ? utilSpace =
        <input
          value={this.props.searchTerm}
          onChange={this.handleSearchTermChange}
          type='text'
          placeholder='search'
        />
      : utilSpace = (
        <h2>
          <Link to='/search'>
            Back
          </Link>
        </h2>
      )
    return (
      <header>
        <h1>
          <Link to='/'>
            svideo
          </Link>
        </h1>
        {utilSpace}
      </header>
    )
  }
}

const { func, bool, string } = React.PropTypes
Header.propTypes = {
  dispatch: func,
  showSearch: bool,
  searchTerm: string
}

const mapStateToProps = (state) => {
  return {
    searchTerm: state.searchTerm
  }
}

export default connect(mapStateToProps)(Header)
