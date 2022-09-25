import React from 'react'
import PropTypes from 'prop-types'
import { Box, Typography, CircularProgress } from '@mui/material'

function CircularProgressWithLabel(props) {
  return (
    <Box
      sx={{
        position: 'relative',
        display: 'inline-block'
      }}
    >
      <CircularProgress size={100} variant="determinate" {...props} />
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)'
        }}
      >
        <Typography
          variant="caption"
          component="div"
          color="Secondary"
        >{`${Math.round(props.value / 10)}/10`}</Typography>
      </Box>
    </Box>
  )
}

CircularProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate variant.
   * Value between 0 and 100.
   */
  value: PropTypes.number.isRequired
}

export default CircularProgressWithLabel
