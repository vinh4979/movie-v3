import './App.scss'
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import ConfigRoutes from './config/configRoutes'
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material'
import AlertModal from './components/alertModal/AlertModal'

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
        <Route
          render={props => (
            <>
              <AlertModal />
              <Header {...props} />
              <ConfigRoutes />
              <Footer />
            </>
          )}
        />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
