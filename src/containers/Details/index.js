import React, { Component } from 'react'
import Header from 'components/Header'

import axios from 'axios'

export default class Details extends Component {
  constructor (props) {
    super(props)
    this.state = {
      omdbData: {

      }
    }
  }
  componentDidMount () {
    axios.get(`http://www.omdbapi.com/?i=${this.props.show.imdbID}`)
      .then(response => {
        console.log(response)
        this.setState({
          omdbData: response.data
        })
      })
      .catch(error => console.error('axios error', error))
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
    this.state.omdbData.imdbRating
      ? rating = <h3>{this.state.omdbData.imdbRating}</h3>
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

const { shape, string } = React.PropTypes

Details.propTypes = {
  show: shape({
    title: string,
    description: string,
    year: string,
    poster: string,
    trailer: string,
    imdbID: string
  })
}
