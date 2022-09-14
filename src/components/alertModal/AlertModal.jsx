import { Modal, Typography, Box, styled, Button } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CLOSE_MODAL, SUCCESS } from 'src/redux/type'
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

const AlertModal = () => {
  const { stateModal, alert } = useSelector(state => state.StateReducer)
  const dispatch = useDispatch()

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
          {alert.type === SUCCESS && <WarningIcon />}

          {/*  <ErrorIcon /> */}
          {/* <SuccessIcon /> */}
          <Typography textAlign="center" color="black" variant="h4" mb={2}>
            {alert.message}
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
          </Box>
        </BoxContainer>
      </StyledModal>
    </>
  )
}

export default AlertModal
