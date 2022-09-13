import React from 'react'
import { useState } from 'react'
import './description.scss'

export default function Description({ movie }) {
  const [active, setActive] = useState(false)
  return (
    <div className="product-collater">
      <ul className="toggle-tabs">
        <li
          className={active === true ? 'current' : ''}
          onClick={() => {
            setActive(true)
          }}
        >
          <span>Description</span>
        </li>
        <li
          className={`last ${active === true ? '' : 'current'}`}
          onClick={() => {
            setActive(false)
          }}
        >
          <span>Trailer</span>
        </li>
      </ul>
      <div>
        <p>{movie.moTa}</p>
      </div>
    </div>
  )
}
