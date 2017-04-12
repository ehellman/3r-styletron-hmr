import React from 'react'
import { Link } from 'react-router-dom'

const ShowCard = (props) => {
  const {
    poster,
    title,
    year,
    description,
    imdbID
  } = props
  return (
    <Link to={`/details/${props.imdbID}`}>
      <div className='show-card'>
        <img src={`/dist/img/posters/${poster}`} />
        <div>
          <h3>{title}</h3>
          <h4>({year})</h4>
          <p>{description}</p>
          <p>{imdbID}</p>
        </div>
      </div>
    </Link>
  )
}

const { string } = React.PropTypes
ShowCard.propTypes = {
  poster: string.isRequired,
  title: string.isRequired,
  year: string.isRequired,
  description: string.isRequired,
  imdbID: string.isRequired
}

export default ShowCard
