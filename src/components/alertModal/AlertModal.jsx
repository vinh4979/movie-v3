import { Modal, Typography, Box, styled, Button } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { datVeAction } from 'src/redux/actions/QuanLyDatVeAction'
import {
  CLOSE_MODAL,
  CONFIRM,
  SUCCESS,
  USER_BOOKING_SUCCESS,
  USER_LOGOUT_SUCCESS,
  WARNING
} from 'src/redux/type'
import ErrorIcon from '../animationIcon/errorIcon/ErrorIcon'
import SuccessIcon from '../animationIcon/successIcon/SuccessIcon'
import WarningIcon from '../animationIcon/warningIcon/WarningIcon'

const StyledModal = styled(Modal)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  border: 'none'
}))
const BoxContainer = styled(Box)(({ theme }) => ({
  backgroundColor: 'rgb(192,192,192)',
  borderRadius: '10px',
  width: 550,
  height: 400,
  transform: 'translate(0, -50%)',
  padding: '30px'
}))

const bookingSuccessMessage =
  'You got it! booking information will be send via your Email'
const logoutMessage = 'Do you want to logout?'
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
    console.log('danh sach ve', roomCinema)
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
          )}

          {/*  <ErrorIcon /> */}
          {/* <SuccessIcon /> */}
          <Typography textAlign="center" color="black" variant="h5" mb={1}>
            {alert.message}
          </Typography>
          <Typography textAlign="center" color="black" variant="h6" mb={2}>
            {alert.message2}
          </Typography>
          <Box
            sx={{
              // border: '1px solid red',
              display: 'flex',
              justifyContent: 'center',
              gap: 5
            }}
          >
            {/* <Button
              variant="contained"
              color="error"
              sx={{
                width: '100px',
                color: 'white'
              }}
            >
              Cancle
            </Button> */}
            {(alert.type === WARNING && alert.message !== logoutMessage) ||
              (alert.type === SUCCESS &&
                alert.message !== bookingSuccessMessage && (
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
                ))}

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
                        message: 'Log out successfully'
                      }
                    })
                    history.push('/')
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
                    history.push('/')
                  }}
                >
                  Booking History
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
