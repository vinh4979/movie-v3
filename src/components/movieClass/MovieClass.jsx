import React from 'react'
import { Fragment } from 'react'
import './movieClass.scss'

export default function MovieClass() {
  const checkClass = true
  const ClassC = () => <span className="class-c">P</span>
  const Class16 = () => <span className="Class-16">16</span>

  return <Fragment>{checkClass ? <ClassC /> : <Class16 />}</Fragment>
}
