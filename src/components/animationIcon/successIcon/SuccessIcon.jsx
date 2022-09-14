import React from 'react'
import './successIcon.scss'

const SuccessIcon = () => {
  return (
    <div className="success">
      <div className="check-icon">
        <span className="icon-line line-tip" />
        <span className="icon-line line-long" />
        <div className="icon-circle" />
        <div className="icon-fix" />
      </div>
    </div>
  )
}

export default SuccessIcon
