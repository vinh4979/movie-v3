import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import React from 'react'
import './movieSearch.scss'

const MovieSearch = ({ lable, handleCallBack, movieList }) => {
  const [item, setItem] = React.useState('')

  const handleChange = event => {
    setItem(event.target.value)
    handleCallBack(event.target.value)
  }
  return (
    <FormControl variant="standard" fullWidth>
      <InputLabel id="demo-simple-select-standard-label">{lable}</InputLabel>
      <Select
        labelId="demo-simple-select-standard-label"
        id="demo-simple-select-standard"
        value={item}
        onChange={handleChange}
        label={lable}
      >
        {movieList?.map((item, index) => {
          return (
            <MenuItem key={index} value={item}>
              {item.tenPhim}
            </MenuItem>
          )
        })}
      </Select>
    </FormControl>
  )
}

export default MovieSearch
