import { Modal, Typography, Box, styled, Button } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { datVeAction } from 'src/redux/actions/QuanLyDatVeAction'
import {
  CLOSE_MODAL,
  CONFIRM,
  ERROR,
  SUCCESS,
  USER_BOOKING_SUCCESS,
  USER_LOGOUT_SUCCESS,
  WARNING
} from 'src/redux/type'
// import ErrorIcon from '../animationIcon/errorIcon/ErrorIcon'
import SuccessIcon from '../animationIcon/successIcon/SuccessIcon'
import WarningIcon from '../animationIcon/warningIcon/WarningIcon'
import { USER_LOGOUT } from '../../redux/type'
import ErrorIcon from '../animationIcon/errorIcon/ErrorIcon'

const StyledModal = styled(Modal)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  border: 'none'
}))
const BoxContainer = styled(Box)(({ theme }) => ({
  backgroundColor: 'rgb(192,192,192, 0.9)',
  borderRadius: '10px',
  width: 550,
  height: 400,
  padding: '30px',
  [theme.breakpoints.down('sm')]: {
    width: 450,
    height: 330
  }
}))

const bookingSuccessMessage =
  'You got it! Your ticket information will be sent to your Email'
const logoutMessage = 'Do you want to logout?'
const loginSuccessMessage = 'Signin successfully'
const logoutSuccessMessage = 'Logout successfully!'
const AlertModal = () => {
  const dispatch = useDispatch()
  const history = useHistory()

  const { stateModal, alert } = useSelector(state => state.StateReducer)
  const { gheDangDat, roomCinema } = useSelector(
    state => state.QuanLyDatVeReducer
  )

  const acceptModalHandler = () => {
    dispatch({
      type: USER_BOOKING_SUCCESS,
      payLoad: {
        type: SUCCESS,
        message: bookingSuccessMessage
      }
    })

    const danhSachVe = []
    gheDangDat.forEach(item => {
      danhSachVe.push({
        maGhe: item.maGhe,
        giaVe: item.giaVe
      })
    })
    dispatch(
      datVeAction({
        maLichChieu: roomCinema.thongTinPhim.maLichChieu,
        danhSachVe,
        history,
        gheDangDat
      })
    )
  }
  return (
    <>
      <StyledModal
        open={stateModal}
        // onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <BoxContainer>
          <Typography variant="h6" color="black" textAlign="center" mb={2}>
            Notification
          </Typography>
          {alert.type === SUCCESS && <SuccessIcon />}
          {(alert.type === WARNING || alert.type === CONFIRM) && (
            <WarningIcon />
            // <SuccessIcon />
            // <ErrorIcon />
          )}
          {alert.type === ERROR && (
            // <WarningIcon />
            // <SuccessIcon />
            <ErrorIcon />
          )}

          {/*  <ErrorIcon /> */}
          {/* <SuccessIcon /> */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
          >
            <Typography textAlign="center" color="black" variant="h6" mb={1}>
              {alert.message}
            </Typography>
            <Typography
              sx={{
                textAlign: 'center'
              }}
              color="black"
              variant="sub"
              mb={2}
            >
              {alert.message2}
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              gap: 5
            }}
          >
            {alert.type === WARNING && alert.message !== logoutMessage && (
              <Button
                variant="contained"
                color="success"
                width={100}
                sx={{
                  width: '100px',
                  color: 'white'
                }}
                onClick={() =>
                  dispatch({
                    type: CLOSE_MODAL
                  })
                }
              >
                Ok
              </Button>
            )}
            {alert.type === ERROR && (
              <Button
                variant="contained"
                color="warning"
                width={100}
                sx={{
                  width: '100px',
                  color: 'white'
                }}
                onClick={() =>
                  dispatch({
                    type: CLOSE_MODAL
                  })
                }
              >
                Ok
              </Button>
            )}

            {alert.type === SUCCESS && alert.message === logoutSuccessMessage && (
              <Button
                variant="contained"
                color="success"
                width={100}
                sx={{
                  width: '100px',
                  color: 'white'
                }}
                onClick={() =>
                  dispatch({
                    type: CLOSE_MODAL
                  })
                }
              >
                Ok
              </Button>
            )}

            {alert.type === SUCCESS && alert.message === loginSuccessMessage && (
              <Button
                variant="contained"
                color="success"
                width={100}
                sx={{
                  width: '100px',
                  color: 'white'
                }}
                onClick={() => {
                  dispatch({
                    type: CLOSE_MODAL
                  })
                  history.goBack()
                }}
              >
                Ok
              </Button>
            )}

            {alert.type === CONFIRM && (
              <>
                <Button
                  variant="contained"
                  color="warning"
                  width={100}
                  sx={{
                    width: '100px',
                    color: 'white'
                  }}
                  onClick={() =>
                    dispatch({
                      type: CLOSE_MODAL
                    })
                  }
                >
                  Cancle
                </Button>
                <Button
                  variant="contained"
                  color="success"
                  width={100}
                  sx={{
                    width: '100px',
                    color: 'white'
                  }}
                  onClick={acceptModalHandler}
                >
                  Booking
                </Button>
              </>
            )}

            {alert.type === WARNING && alert.message === logoutMessage && (
              <>
                <Button
                  variant="contained"
                  color="success"
                  width={100}
                  sx={{
                    width: '150px',
                    color: 'white'
                  }}
                  onClick={() => {
                    dispatch({
                      type: CLOSE_MODAL
                    })
                  }}
                >
                  Cancel
                </Button>
                <Button
                  variant="contained"
                  color="warning"
                  width={100}
                  sx={{
                    width: '150px',
                    color: 'white'
                  }}
                  onClick={() => {
                    dispatch({
                      type: USER_LOGOUT_SUCCESS,
                      payLoad: {
                        type: SUCCESS,
                        message: 'Logout successfully!'
                      }
                    })
                    dispatch({
                      type: USER_LOGOUT
                    })
                    history.goBack()
                    localStorage.clear()
                  }}
                >
                  Logout
                </Button>
              </>
            )}

            {alert.type === SUCCESS && alert.message === bookingSuccessMessage && (
              <>
                <Button
                  variant="contained"
                  color="success"
                  width={100}
                  sx={{
                    width: '150px',
                    color: 'white'
                  }}
                  onClick={() => {
                    dispatch({
                      type: CLOSE_MODAL
                    })
                    history.push('/')
                  }}
                >
                  HomePage
                </Button>
                <Button
                  variant="contained"
                  color="warning"
                  width={100}
                  sx={{
                    width: '150px',
                    color: 'white'
                  }}
                  onClick={() => {
                    dispatch({
                      type: CLOSE_MODAL
                    })
                    history.push('/profile')
                  }}
                >
                  History
                </Button>
              </>
            )}
          </Box>
        </BoxContainer>
      </StyledModal>
    </>
  )
}

export default AlertModal
