import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Header extends Component {
  render () {
    let utilSpace
    this.props.showSearch
      ? utilSpace =
        <input
          value={this.props.searchTerm}
          onChange={this.props.handleSearchTermChange}
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
  handleSearchTermChange: func,
  showSearch: bool,
  searchTerm: string
}
