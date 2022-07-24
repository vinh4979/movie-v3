import React from 'react'
import { Switch } from 'react-router-dom'

import { Route } from 'react-router-dom'
import Catalog from 'src/pages/Catalog'
import DetailPage from 'src/pages/DetailPage'
import HomePage from '../pages/HomePage'

const ConfigRoutes = () => {
  return (
    <Switch>
      <Route path="/catalog" component={Catalog} />
      <Route path="/detail/:id" component={DetailPage} />
      <Route path="/" exact component={HomePage} />
    </Switch>
  )
}

export default ConfigRoutes
