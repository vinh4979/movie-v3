import './App.scss'
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material'
import AlertModal from './components/alertModal/AlertModal'
import { Switch } from 'react-router-dom'
import SigninPage from './pages/SigninPage'
import SignupPage from './pages/SignupPage'
import BookingPage from './pages/BookingPage'
import DetailPage from './pages/DetailPage'
import HomePage from './pages/HomePage'
import { Redirect } from 'react-router-dom'
import ProfilePage from './pages/ProfilePage'
import BookingModal from './components/bookingModal/BookingModal'

function App() {
  const theme = createTheme({
    palette: {
      mode: 'dark'
    }
  })
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <AlertModal />
        <BookingModal />
        <Switch>
          <Route path="/signin" exact>
            <Header />
            <SigninPage />
          </Route>
          <Route path="/signup" exact>
            <Header />
            <SignupPage />
          </Route>
          <Route path="/booking/:id" exact>
            <Header />
            <BookingPage />
          </Route>
          <Route path="/detail/:id" exact>
            <Header />
            <DetailPage />
            <Footer />
          </Route>
          <Route path="/home" exact>
            <Header />
            <HomePage />
            <Footer />
          </Route>
          <Route path="/profile">
            <Header />
            <ProfilePage />
            <Footer />
          </Route>
          <Route path="*" exact>
            <Redirect to="/home" />
          </Route>
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
