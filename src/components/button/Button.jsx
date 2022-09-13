import React from 'react'
import PropTypes from 'prop-types'
import './button.scss'

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
      className={`btn-outline ${props.className}`}
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
      className={`button ${props.className} `}
    >
      {props.children}
    </button>
  )
}

export const TabButton = props => {
  return <div></div>
}

Button.propTypes = {
  onclick: PropTypes.func
}

export default Button
