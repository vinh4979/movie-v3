import { LoadingButton } from '@mui/lab'
import { Box, Button, styled, TextField, Typography } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import bg from 'src/assets/img/bg-popcorn.jpg'
import { dangNhapAction } from 'src/redux/actions/QuanLyNguoiDungAction'
import { rules } from 'src/utils/rules'

const MainBox = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '100vh',
  backgroundImage: `url(${bg})`,
  backgroundRepeat: 'none',
  backgroundSize: 'cover',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}))

const LoadingBtn = styled(LoadingButton)(({ theme }) => ({
  border: '1px solid',
  lineHeight: 1.5,
  backgroundColor: '#d50000',
  borderColor: '#d50000',
  color: 'white',
  fontSize: '1rem',
  fontWeight: '900',

  height: '50px',
  '&:hover': {
    backgroundColor: '#d50000',
    borderColor: '#d50000',
    boxShadow: 'none'
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: '#d50000',
    borderColor: '#d50000'
  },
  '&:focus': {
    boxShadow: 'none'
  }
}))

export default function SigninPage() {
  const dispatch = useDispatch()
  const {
    control,
    handleSubmit,
    getValues,
    formState: { errors },
    setError
  } = useForm({
    defaultValues: {
      email: '',
      password: ''
    }
  })

  const handleLogin = data => {
    // here
    const body = {
      taiKhoan: data.email,
      matKhau: data.password
    }
    console.log('body', body)
    try {
      dispatch(dangNhapAction(body))
    } catch (err) {
      console.log('dang nhap err:', err)
    }
  }
  return (
    <>
      <MainBox component="main">
        <Container
          component="div"
          maxWidth="sm"
          sx={{
            borderRadius: '5px',
            bgcolor: 'rgb(0,0,0,0.7)'
          }}
        >
          <Typography
            sx={{
              mb: 5,
              mt: 10,
              textAlign: 'center',
              fontWeight: 'bold'
            }}
            variant="h3"
          >
            Sign In
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit(handleLogin)}
            sx={{
              ml: 3,
              mr: 3
            }}
          >
            <Controller
              name="email"
              control={control}
              rules={rules.email}
              render={({ field }) => (
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email"
                  name="email"
                  type="email"
                  onChange={field.onChange}
                  value={getValues('email')}
                  disabled={false}
                  error={errors['email']?.message !== undefined}
                  helperText={errors['email']?.message}
                  sx={{
                    mb: 2,
                    '&:active': {
                      boxShadow: 'none',
                      backgroundColor: 'none'
                      // borderColor: '#005cbf'
                    },
                    '&:focus': {
                      boxShadow: 'none',
                      backgroundColor: 'none'
                    }
                  }}
                />
              )}
            />
            <Controller
              name="password"
              control={control}
              rules={rules.password}
              render={({ field }) => (
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="password"
                  label="Input Your Password"
                  name="password"
                  type="password"
                  onChange={field.onChange}
                  value={getValues('password')}
                  disabled={false}
                  error={errors['password']?.message !== undefined}
                  helperText={errors['password']?.message}
                  sx={{
                    mb: 4,
                    '&:active': {
                      boxShadow: 'none',
                      backgroundColor: 'red',
                      color: 'white'
                    },
                    '&:focus': {
                      boxShadow: 'none',
                      backgroundColor: 'none',
                      color: 'white'
                    }
                  }}
                />
              )}
            />
            <LoadingBtn
              variant="outlined"
              fullWidth
              type="submit"
              loading={false}
            >
              Login
            </LoadingBtn>
            <Button
              component={Link}
              to="/signup"
              sx={{ textTransform: 'none', mb: 10, color: 'white', mt: 3 }}
            >
              Don't have an account? Signup
            </Button>
          </Box>
        </Container>
      </MainBox>
    </>
  )
}
