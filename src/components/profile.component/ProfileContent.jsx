import { Box, Typography } from '@mui/material'
import React from 'react'

export default function ProfileContent({ userProfile }) {
  function contentItem(title, content) {
    return (
      <Box
        sx={{
          display: 'flex',
          gap: '10px',
          marginBottom: '5px',
          mb: 1
        }}
      >
        <Typography variant="body1" fontWeight={600}>
          {title}
        </Typography>
        <Typography variant="body1" fontWeight={600} color="gray">
          {content}
        </Typography>
      </Box>
    )
  }

  return (
    <Box
      sx={{
        width: '100%'
      }}
    >
      {contentItem('Your Name:', userProfile?.hoTen)}
      {contentItem('Your Username:', userProfile?.taiKhoan)}
      {contentItem('Your Email:', userProfile?.email)}
      {contentItem('Your Phone Number:', userProfile?.soDT)}
    </Box>
  )
}
