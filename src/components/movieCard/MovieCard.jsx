import React from 'react'
import { Link } from 'react-router-dom'
import Button, { CardBtn } from '../button/Button'
import MovieClass from '../movieClass/MovieClass'
import './movie-card.scss'

const MovieCard = props => {
  const bg = props.item.hinhAnh
  const item = props.item

  const setModalActive = async () => {
    const modal = document.querySelector(`#modal_${item.maPhim}`)

    const videos = item.trailer

    if (videos.length > 0) {
      const videSrc = videos
      modal
        .querySelector('.modal__content > iframe')
        .setAttribute('src', videSrc)
    } else {
      modal.querySelector('.modal__content').innerHTML = 'No trailer'
    }

    modal.classList.toggle('active')
  }

  return (
    <Link to="/">
      <div
        className={`movie-card `}
        style={{
          backgroundImage: `url(${bg})`
          // backgroundPosition: 'center',
          // backgroundSize: 'cover'
        }}
      >
        <Button onClick={setModalActive}>
          <i className="bx bx-play"></i>
        </Button>
        {/* <MovieClass /> */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0
          }}
        >
          <h3>{item.tenPhim}</h3>
          <div>
            <CardBtn className="medium">Deatail</CardBtn>
            <CardBtn className="medium">Booking</CardBtn>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default MovieCard
