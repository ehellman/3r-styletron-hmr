import React from 'react'

const { string } = React.PropTypes

const ShowCard = (props) => {
  const {
    poster,
    title,
    year,
    description
  } = props
  return (
    <div className='show-card'>
      <img src={`/dist/img/posters/${poster}`} />
      <div>
        <h3>{title}</h3>
        <h4>({year})</h4>
        <p>{description}</p>
      </div>
    </div>
  )
}

ShowCard.propTypes = {
  poster: string,
  title: string,
  year: string,
  description: string
}

export default ShowCard
