import './App.scss'
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import ConfigRoutes from './config/configRoutes'

function App() {
  return (
    <BrowserRouter>
      <Route
        render={props => (
          <>
            <Header {...props} />
            <ConfigRoutes />
            <Footer />
          </>
        )}
      />
    </BrowserRouter>
  )
}

export default App
