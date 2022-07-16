import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../button/Button'
import './movie-card.scss'

const MovieCard = props => {
  const bg = 'https://pbs.twimg.com/media/DnfC_TBXsAgO4ED.jpg'
  const item = props.item
  return (
    <Link to="/">
      <div className="movie-card" style={{ backgroundImage: `url(${bg})` }}>
        <Button>
          <i className="bx bx-play"></i>
        </Button>
      </div>
      <h3>{item.tenPhim}</h3>
    </Link>
  )
}

export default MovieCard
