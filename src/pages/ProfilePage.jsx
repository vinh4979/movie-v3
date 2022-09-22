import { Avatar, Box, Divider, Paper, Typography } from '@mui/material'
import React from 'react'
import PersonIcon from '@mui/icons-material/Person'
import ProfileContent from '../components/profile.component/ProfileContent'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { thongTinTaiKhoanAction } from '../redux/actions/QuanLyNguoiDungAction'
import ProfileTransaction from 'src/components/profile.component/ProfileTransaction'

export default function ProfilePage() {
  const dispatch = useDispatch()
  const userProfile = useSelector(state => state.QuanLyNguoiDungReducer.profile)
  console.log('authuser:', userProfile)

  useEffect(() => {
    dispatch(thongTinTaiKhoanAction())
  }, [dispatch])
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        marginTop: '10rem',
        borderRadius: '10px'
      }}
    >
      <Box
        sx={{
          width: 900
          // p: 4
        }}
      >
        <Paper>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              p: 4
            }}
          >
            <Avatar
              sx={{
                width: { xs: '70px', sm: '100px' },
                height: { xs: '70px', sm: '100px' },
                mb: 2
              }}
            >
              <PersonIcon
                sx={{
                  fontSize: '5rem'
                }}
              />
            </Avatar>
            <Typography
              textAlign={'center'}
              variant="h5"
              mb={2}
              fontWeight={900}
            >
              Hi, {userProfile?.taiKhoan} !
            </Typography>
            {/* user infor */}
            <ProfileContent userProfile={userProfile} />
            <Divider
              sx={{
                width: '100%'
              }}
            />
            {/* <hr /> */}
            <ProfileTransaction userProfile={userProfile} />
          </Box>
        </Paper>
      </Box>
    </Box>
  )
}
