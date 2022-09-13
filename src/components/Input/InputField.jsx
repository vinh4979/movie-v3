import { styled, TextField } from '@mui/material'
import React from 'react'

const ValidationTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: 'white'
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'blue'
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'rgb(255, 255, 255, 0.6)'
      // backgroundColor: 'rgb(64, 64, 64, 0.4)'
    },
    '&:hover fieldset': {
      borderColor: 'white'
    },
    '&.Mui-focused fieldset': {
      borderColor: 'white'
    }
  }
})

const InputField = (props, { label }) => {
  return (
    <>
      <ValidationTextField
        label={props.label}
        required
        variant="outlined"
        fullWidth
        id="validation-outlined-input"
        size="medium"
        helperText="text helper text"
      />
    </>
  )
}

export default InputField
