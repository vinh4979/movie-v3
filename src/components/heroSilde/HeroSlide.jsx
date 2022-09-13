import React, { useRef as UseRef } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import './heroSlide.scss'
import Button, { OutlineButton } from '../button/Button'

import { useHistory } from 'react-router'

import Modal, { ModalContent } from '../modal/Modal'
import { Pagination, Navigation, Autoplay } from 'swiper'

const HeroSlide = ({ bannerList }) => {
  return (
    <div className="hero-slide">
      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false
        }}
      >
        {bannerList.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              {({ isActive }) => (
                <HeroSlideItem
                  item={item}
                  className={`${isActive ? 'active' : ''}`}
                />
              )}
            </SwiperSlide>
          )
        })}
      </Swiper>

      {bannerList.map((item, index) => {
        return <TrailerModal key={index} item={item} />
      })}
    </div>
  )
}

const HeroSlideItem = props => {
  let hisrory = useHistory()

  const item = props.item

  const background = item.hinhAnh

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
      className={`hero-slide__item ${props.className}`}
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="hero-slide__item__content container">
        <div className="hero-slide__item__content__info">
          <h2 className="title">{item.tenPhim}</h2>
          <div className="overview">{item.moTa}</div>
          <div className="btns">
            <Button onClick={() => hisrory.push('/movie/' + item.maPhim)}>
              Booking Now
            </Button>
            <OutlineButton onClick={setModalActive}>
              Watch trailer
            </OutlineButton>
          </div>
        </div>
        <div className="hero-slide__item__content__poster">
          <img src={item.hinhAnh} alt="" />
        </div>
      </div>
    </div>
  )
}

export const TrailerModal = props => {
  const iframe = UseRef(null)
  const item = props.item

  const onClose = () => iframe.current.setAttribute('src', '')

  return (
    <Modal active={false} id={`modal_${item.maPhim}`}>
      <ModalContent onClose={onClose}>
        <h1></h1>
        <iframe
          ref={iframe}
          width="100%"
          height="500px"
          title="trailer"
        ></iframe>
      </ModalContent>
    </Modal>
  )
}

export default HeroSlide
