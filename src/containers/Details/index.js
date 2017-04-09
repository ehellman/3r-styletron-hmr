import React, { Component } from 'react'
import Header from 'components/Header'

export default class Details extends Component {
  render () {
    const {
      title,
      description,
      year,
      poster,
      trailer
    } = this.props.show
    return (
      <div className='details'>
        <Header />
        <section>
          <h1>{title}</h1>
          <h2>({year})</h2>
          <img src={`/dist/img/posters/${poster}`} alt={title} />
          <p>{description}</p>
        </section>
        <div>
          <iframe src={`https://www.youtube-nocookie.com/embed/${trailer}?rel=0&amp;controls=0;showinfo=0`} frameBorder='0' allowFullscreen />
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
    trailer: string
  })
}
