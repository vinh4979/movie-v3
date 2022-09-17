import React from 'react'
import { CardBtn } from '../button/Button'
import './DetailFilm.scss'
import '@tsamantanis/react-glassmorphism/dist/index.css'
const DetailFilm = props => {
  const item = props.detail
  return (
    <div className="detail">
      <div className="image-film">
        <img src={item.hinhAnh} alt="" />
      </div>
      <div className="detail-film">
        <h3 className="title">{item.tenPhim}</h3>
        <hr />
        <div className="detail-item">
          <p>
            <label htmlFor="">Diretor:</label> Kyle Balda, Brad Ableson,
            Jonathan del Val
          </p>
          <p>
            <label htmlFor=""> Cast:</label> Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Est, libero?
          </p>
          <p>
            <label htmlFor="">Genre:</label> Lorem ipsum dolor sit amet.
          </p>
          <p>
            <label htmlFor="">Running Time:</label> Lorem ipsum dolor sit amet.
          </p>
          <p>
            <label htmlFor="">Languge:</label> English with VietNamese subtitle
            and club
          </p>
          <p>
            <label htmlFor="">Rated:</label>{' '}
          </p>
          <CardBtn>Booking</CardBtn>
        </div>
      </div>
    </div>
  )
}

export default DetailFilm
