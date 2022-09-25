import { Typography } from '@mui/material'
import React from 'react'
import Button, { OutlineButton } from 'src/components/button/Button'
import CircularProgressWithLabel from 'src/components/CircularProgressWithLabel/CircularProgressWithLabel'
import { TrailerModal } from 'src/components/heroSilde/HeroSlide'
import { converDate, movieDetailContent } from 'src/utils/helper'
import './BannerDetailFilm.scss'

export default function BannerDetailFilm({ movieDetail }) {
  const setModalActive = async () => {
    const modal = document.querySelector(`#modal_${movieDetail.maPhim}`)
    const videos = movieDetail.trailer

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
    <>
      <div
        className={`hero-slide__item active`}
        style={{ backgroundImage: `url(${movieDetail.hinhAnh})` }}
      >
        <div className="hero-slide__item__content container">
          <div className="hero-slide__item__content__poster poster_detail">
            <img src={movieDetail.hinhAnh} alt="" />
          </div>
          <div className="hero-slide__item__content__info">
            <h2 className="title title_detail">{movieDetail.tenPhim}</h2>
            <div className="overview">
              <div className="movieInfor__detail">
                {movieDetailContent.map((item, index) => (
                  <p className="movieInfor__detail--item" key={index}>
                    <span className="subtitle">{item.title}</span>
                    <span className="subtitle__detail">{item.content}</span>
                  </p>
                ))}
                <p className="movieInfor__detail--item">
                  <span className="subtitle">Release date: </span>
                  <span className="subtitle__detail">
                    {converDate(movieDetail.ngayKhoiChieu)}
                  </span>
                </p>
              </div>
            </div>
            <div className="overview">
              <p className="movieInfor__detail--item">
                <span className="subtitle">Overview: </span>
              </p>
              {movieDetail.moTa}
            </div>

            <div className="btns btn-group">
              <CircularProgressWithLabel value={movieDetail.danhGia * 10} />
              <OutlineButton onClick={setModalActive}>
                Watch trailer
              </OutlineButton>
            </div>
          </div>
        </div>
      </div>
      {movieDetail && <TrailerModal item={movieDetail} />}
    </>
  )
}
