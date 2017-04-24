import React, { Component } from 'react'
import Header from 'components/Header'
import { connect } from 'react-redux'
import { getOmdbDetails } from 'actions'

class Details extends Component {
  componentDidMount () {
    if (!this.props.omdbData.imdbRating) {
      this.props.dispatch(getOmdbDetails(this.props.show.imdbID))
    }
  }
  render () {
    const {
      title,
      description,
      year,
      poster,
      trailer
    } = this.props.show
    let rating
    this.props.omdbData.imdbRating
      ? rating = <h3>{this.props.omdbData.imdbRating}</h3>
      : rating = <img src='/public/image/loading.png' alt='loading' />
    return (
      <div className='details'>
        <Header />
        <section>
          <h1>{title}</h1>
          <h2>({year})</h2>
          {rating}
          <img src={`/dist/img/posters/${poster}`} />
          <p>{description}</p>
        </section>
        <div>
          <iframe src={`https://www.youtube-nocookie.com/embed/${trailer}?rel=0&amp;controls=0;showinfo=0`} frameBorder='0' allowFullScreen />
        </div>
      </div>
    )
  }
}

const { shape, string, func } = React.PropTypes

Details.propTypes = {
  show: shape({
    title: string,
    description: string,
    year: string,
    poster: string,
    trailer: string,
    imdbID: string
  }),
  omdbData: shape({
    imdbID: string
  }),
  dispatch: func
}

const mapStateToProps = (state, ownProps) => {
  const omdbData = state.omdbData[ownProps.show.imdbID]
    ? state.omdbData[ownProps.show.imdbID]
    : {}

  return {
    omdbData: omdbData
  }
}
export default connect(mapStateToProps)(Details)
