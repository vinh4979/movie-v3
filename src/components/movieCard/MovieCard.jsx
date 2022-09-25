import React from 'react'
import { Link } from 'react-router-dom'
import Button, { CardBtn } from '../button/Button'
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
      modal.querySelector('.modal__content > h1').innerHTML = 'No trailer'
    }

    modal.classList.toggle('active')
  }
  return (
    <div
      className={`movie-card `}
      style={{
        backgroundImage: `url(${bg})`
      }}
    >
      <Button onClick={setModalActive}>
        <i className="bx bx-play"></i>
      </Button>
      <div className="film-content ">
        <h3>{item.tenPhim}</h3>
        <div className="card-button">
          <Link href={`/detail/${item.maPhim}`} to={`/detail/${item.maPhim}`}>
            <CardBtn className="">Deatail</CardBtn>
          </Link>
          <CardBtn className="btn-booking">
            <span>
              <span>Booking</span>
            </span>
          </CardBtn>
        </div>
      </div>
    </div>
  )
}

export default MovieCard
