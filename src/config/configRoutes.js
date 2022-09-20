import React from 'react'
import { Switch } from 'react-router-dom'
import { Route } from 'react-router-dom'
import BookingPage from 'src/pages/BookingPage'
import Catalog from 'src/pages/Catalog'
import DetailPage from 'src/pages/DetailPage'
import SignupPage from 'src/pages/SignupPage'
import HomePage from '../pages/HomePage'
import SigninPage from '../pages/SigninPage'

const ConfigRoutes = () => {
  return (
    <Switch>
      <Route path="/catalog" component={Catalog} />
      <Route path="/detail/:id" component={DetailPage} />
      <Route path="/" exact component={HomePage} />
      <Route path="/signin" component={SigninPage} />
      <Route path="/signup" component={SignupPage} />
      <Route path="/booking/:id" exact component={BookingPage} />
    </Switch>
  )
}

export default ConfigRoutes
