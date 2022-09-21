import {
  Avatar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Typography
} from '@mui/material'
import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
// import { useLocation } from 'react-router-dom'
import './header.scss'
import { CustombtnRed, CustombtnWhite } from '../button/Button'
import { useHistory } from 'react-router-dom'
import { useState } from 'react'
import PersonIcon from '@mui/icons-material/Person'
import { useDispatch, useSelector } from 'react-redux'
import { USER_LOGOUT_ALERT, WARNING } from 'src/redux/type'
import MenuIcon from '@mui/icons-material/Menu'
import { HashLink } from 'react-router-hash-link'

const headerNav = [
  {
    display: 'Home',
    path: '#homepage'
  },
  {
    display: 'Movies',
    path: '#homepage__movielist'
  },
  {
    display: 'Booking',
    path: '#homepage__schedule'
  }
]

const Header = () => {
  // const { pathname } = useLocation()
  const headerRef = useRef(null)
  const history = useHistory()
  const dispatch = useDispatch()
  // const active = headerNav.findIndex(e => e.path === pathname)
  const [active, setActive] = useState(0)
  const handleActive = index => {
    setActive(index)
  }
  const { authUser } = useSelector(state => state.QuanLyNguoiDungReducer)

  const [anchorEl, setAnchorEl] = React.useState(null)
  const [anchorEl2, setAnchorEl2] = React.useState(null)
  const open = Boolean(anchorEl)
  const open2 = Boolean(anchorEl2)
  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }
  const handleClick2 = event => {
    setAnchorEl2(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
    setAnchorEl2(null)
  }

  const handleLogout = () => {
    // console.log('handleLogout')
    setAnchorEl(null)
    dispatch({
      type: USER_LOGOUT_ALERT,
      payLoad: {
        type: WARNING,
        message: 'Do you want to logout?'
      }
    })
  }

  useEffect(() => {
    const shrinkHeader = () => {
      if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
      ) {
        headerRef.current.classList.add('shrink')
      } else {
        headerRef.current.classList.remove('shrink')
      }
    }
    window.addEventListener('scroll', shrinkHeader)
    return () => {
      window.removeEventListener('scroll', shrinkHeader)
    }
  }, [])

  return (
    <div ref={headerRef} className="header">
      <div className="header__wrap container">
        <div className="logo">
          {/* <img src={logo} alt="" /> */}

          <Link to="/">Movies</Link>
        </div>
        <ul className="header__nav">
          {headerNav.map((item, index) => (
            <HashLink key={index} smooth to={item.path}>
              <li className={`${index === active ? 'active' : ''}`}>
                {/* <Link to={item.path}>{item.display}</Link> */}
                <Typography
                  onClick={() => handleActive(index)}
                  variant="h5"
                  fontWeight={900}
                >
                  {item.display}
                </Typography>
              </li>
            </HashLink>
          ))}
        </ul>
        <div className="header__sign">
          {!authUser ? (
            <Stack spacing={2} direction="row">
              <CustombtnRed
                onClick={() => {
                  history.push('/signin')
                }}
              >
                Sign in
              </CustombtnRed>
              <CustombtnWhite
                onClick={() => {
                  history.push('/signup')
                }}
              >
                Sign up
              </CustombtnWhite>
            </Stack>
          ) : (
            <>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px'
                }}
                id="demo-positioned-button"
                aria-controls={open ? 'demo-positioned-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
              >
                <Avatar>
                  <PersonIcon />
                </Avatar>

                <Box>
                  <Typography variant="h6" fontWeight={900}>
                    {authUser.taiKhoan}
                  </Typography>
                </Box>
              </Box>
              <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left'
                }}
                // transformOrigin={{
                //   vertical: 'top',
                //   horizontal: 'left'
                // }}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </Menu>
            </>
          )}
        </div>

        <div className="header__sign__mobile">
          <IconButton
            size="large"
            id="demo-positioned-button-2"
            aria-controls={open2 ? 'demo-positioned-menu-2' : undefined}
            aria-haspopup="true"
            aria-expanded={open2 ? 'true' : undefined}
            onClick={handleClick2}
          >
            <MenuIcon fontSize="large" />
          </IconButton>
          <Menu
            id="demo-positioned-menu-2"
            aria-labelledby="demo-positioned-button-2"
            anchorEl={anchorEl2}
            open={open2}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right'
            }}
          >
            {!authUser ? (
              <>
                <MenuItem
                  onClick={() => {
                    history.push('/signin')
                  }}
                >
                  Sign In
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    history.push('/signup')
                  }}
                >
                  Sign Up
                </MenuItem>
              </>
            ) : (
              <>
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </>
            )}
          </Menu>
        </div>
      </div>
    </div>
  )
}

export default Header
