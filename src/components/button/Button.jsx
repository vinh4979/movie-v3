import React from 'react'
import PropTypes from 'prop-types'
import './button.scss'
import { ButtonUnstyled, buttonUnstyledClasses } from '@mui/base'
import { styled } from '@mui/system'

const Button = props => {
  return (
    <button
      className={`btn ${props.className}`}
      onClick={props.onClick ? () => props.onClick() : null}
    >
      {props.children}
    </button>
  )
}

export const OutlineButton = props => {
  return (
    <Button
      className={`btn-outline  ${props.className}`}
      onClick={props.onClick ? () => props.onClick() : null}
    >
      {props.children}
    </Button>
  )
}

export const CardBtn = props => {
  return (
    <button
      onClick={props.onClick ? () => props.onClick() : null}
      className={`button  ${props.className} `}
    >
      {props.children}
    </button>
  )
}

const red = {
  500: '#d32f2f',
  600: '#c62828',
  700: '#b71c1c'
}

const grey = {
  100: '#eaeef2',
  300: '#afb8c1',
  900: '#24292f'
}

const white = {
  100: '#fafafa',
  300: '#eeeeee',
  900: '#e0e0e0'
}

const green = {
  700: '#388e3c',
  800: '#2e7d32',
  900: '#1b5e20'
}

const orange = {
  600: '#fb8c00',
  700: '#f57c00',
  800: '#ef6c00'
}
const BtnRed = styled(ButtonUnstyled)(
  ({ theme }) => `
  font-weight: 500;
  font-size: 0.975rem;
  background-color: ${red[500]};
  padding: 10px 20px;
  border-radius: 5px;
  color: white;
  transition: all 150ms ease;
  cursor: pointer;
  border: none;
  box-shadow: 0px 4px 30px ${
    theme.palette.mode === 'dark' ? grey[900] : grey[100]
  };

  &:hover {
    background-color: ${red[600]};
  }

  &.${buttonUnstyledClasses.active} {
    background-color: ${red[700]};
  }
  `
)

export const CustombtnRed = props => {
  return (
    <BtnRed onClick={props.onClick ? () => props.onClick() : null}>
      {props.children}
    </BtnRed>
  )
}

const BtnWhite = styled(ButtonUnstyled)(
  ({ theme }) => `
  font-weight: 500;
  font-size: 0.975rem;
  background-color: transparent;
  padding: 10px 20px;
  border-radius: 5px;
  color: white;
  transition: all 150ms ease;
  cursor: pointer;
  border: 2px solid ${white[100]};
  box-shadow: 0px 4px 30px ${
    theme.palette.mode === 'dark' ? grey[900] : grey[100]
  };

  &:hover {
    border: 2px solid ${white[900]}; 
    color: ${white[900]};
  }

  &.${buttonUnstyledClasses.active} {
    background-color: ${red[700]};
  }
  `
)
export const CustombtnWhite = props => {
  return (
    <BtnWhite onClick={props.onClick ? () => props.onClick() : null}>
      {props.children}
    </BtnWhite>
  )
}

// btn green
const BtnGreen = styled(ButtonUnstyled)(
  ({ theme }) => `
  font-weight: 500;
  font-size: 0.975rem;
  background-color: ${green[700]};
  padding: 10px 20px;
  border-radius: 5px;
  color: white;
  transition: all 150ms ease;
  cursor: pointer;
  border: none;
  box-shadow: 0px 4px 30px ${
    theme.palette.mode === 'dark' ? grey[900] : grey[100]
  };

  &:hover {
   background-color: ${green[800]};
  }

  &.${buttonUnstyledClasses.active} {
   background-color:  ${green[900]};
  }
  `
)
export const CustombtnGreen = props => {
  return (
    <BtnGreen onClick={props.onClick ? () => props.onClick() : null}>
      {props.children}
    </BtnGreen>
  )
}

// btn orange
const BtnOrange = styled(ButtonUnstyled)(
  ({ theme }) => `
  font-weight: 500;
  font-size: 0.975rem;
  background-color: ${orange[600]};
  padding: 10px 20px;
  border-radius: 5px;
  color: white;
  transition: all 150ms ease;
  cursor: pointer;
  border: none;
  box-shadow: 0px 4px 30px ${
    theme.palette.mode === 'dark' ? grey[900] : grey[100]
  };

  &:hover {
   background-color: ${orange[700]};
  }

  &.${buttonUnstyledClasses.active} {
   background-color: ${orange[800]};
  }
  `
)
export const CustombtnOrange = props => {
  return (
    <BtnOrange onClick={props.onClick ? () => props.onClick() : null}>
      {props.children}
    </BtnOrange>
  )
}

Button.propTypes = {
  onclick: PropTypes.func
}

export default Button
