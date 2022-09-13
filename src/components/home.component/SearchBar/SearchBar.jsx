import React from 'react'
import { useCallback } from 'react'
import MovieSearch from 'src/components/SearchForm/MovieSearch'
import { lableCinema, lableDate, lableMovie } from 'src/utils/helper'
import './searchBar.scss'
import { useDispatch, useSelector } from 'react-redux'
import { LayThongTinLichChieuPhimAction } from 'src/redux/actions/QuanLyRapAction'
import { useState } from 'react'

const SearchBar = ({ movieList }) => {
  const dispatch = useDispatch()
  const { movieSearch } = useSelector(state => state.QuanLyRapReducer)
  const handleSearchMovie = useCallback(
    value => {
      console.log('Handle search movie:', value.maPhim)
      dispatch(LayThongTinLichChieuPhimAction(value.maPhim))
    },
    [dispatch]
  )
  // lấy những cum rạp có chiếu phim đã chọn
  const cinemaByMovie = movieSearch?.heThongRapChieu.map(
    item => item.maHeThongRap
  )

  // lấy rạp có chiếu phim đã chọn

  console.log('moviechoose:', cinemaByMovie)

  const handleSearchCinema = useCallback(value => {
    console.log('handle search cinema:', value)
  }, [])

  const handleSearchDate = useCallback(value => {
    console.log('handle search date:', value)
  }, [])

  return (
    <div className="container search_bar">
      <div className="searchBar__title">
        <p className="subNameMovie">WELCOME TO G-CINEMA</p>
        <p className="nameMovie">WHAT ARE YOU LOOKING FOR</p>
      </div>
      <div className="movie_search">
        <div className="input_search_movie input_search_item">
          <MovieSearch
            handleCallBack={handleSearchMovie}
            lable={lableMovie}
            movieList={movieList}
          />
        </div>
        <div className="input_search_cinema input_search_item">
          <MovieSearch
            lable={lableCinema}
            handleCallBack={handleSearchCinema}
          />
        </div>
        <div className="input_search_date input_search_item">
          <MovieSearch lable={lableDate} handleCallBack={handleSearchDate} />
        </div>
      </div>
    </div>
  )
}

export default SearchBar
