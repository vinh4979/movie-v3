import React from 'react'
import './glassBg.scss'

export default function GlassBg({ bg }) {
  const background = bg
  // console.log(bg)
  return (
    <div className="glass">
      <div
        className="glass-item "
        style={{ backgroundImage: `url(${background})` }}
      ></div>
    </div>
  )
}
