import { LoadingButton } from '@mui/lab'
import {
  Box,
  Container,
  styled,
  Typography,
  TextField,
  Button
} from '@mui/material'
import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import bg from 'src/assets/img/bg-popcorn.jpg'
import { GroupID } from 'src/config/configApi'
import { dangKyAction } from 'src/redux/actions/QuanLyNguoiDungAction'
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

const ValidationTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: 'white !important'
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'blue'
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'rgb(255, 255, 255, 0.6)'
      // backgroundColor: 'rgb(64, 64, 64, 0.4)'
    },
    '&:hover fieldset': {
      borderColor: 'white'
    },
    '&.Mui-focused fieldset': {
      borderColor: 'white'
    }
  }
})

const SignupPage = () => {
  const dispatch = useDispatch()
  const {
    control,
    handleSubmit,
    getValues,
    formState: { errors },
    setError
  } = useForm({
    defaultValues: {
      taiKhoan: '',
      matKhau: '',
      email: '',
      soDt: '',
      maNhom: '',
      hoTen: ''
    }
  })
  const handleLogin = data => {
    const body = {
      taiKhoan: data.nickname,
      matKhau: data.password,
      email: data.email,
      soDt: data.phone,
      maNhom: `${GroupID}`,
      hoTen: data.name
    }
    try {
      dispatch(dangKyAction(body))
    } catch (err) {
      console.log('Err', err)
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
            Sign Up
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
              name="name"
              control={control}
              rules={rules.name}
              render={({ field }) => (
                <ValidationTextField
                  label="Input Your Name"
                  required
                  variant="outlined"
                  fullWidth
                  size="medium"
                  name="name"
                  type="text"
                  onChange={field.onChange}
                  value={getValues('name')}
                  disabled={false}
                  error={errors['name']?.message !== undefined}
                  helperText={errors['name']?.message}
                  sx={{
                    mb: 4
                  }}
                />
              )}
            />
            <Controller
              name="nickname"
              control={control}
              rules={rules.nickname}
              render={({ field }) => (
                <ValidationTextField
                  label="Input Your Account Name"
                  required
                  variant="outlined"
                  fullWidth
                  size="medium"
                  name="nickname"
                  type="text"
                  onChange={field.onChange}
                  value={getValues('nickname')}
                  disabled={false}
                  error={errors['nickname']?.message !== undefined}
                  helperText={errors['nickname']?.message}
                  sx={{
                    mb: 4
                  }}
                />
              )}
            />
            <Controller
              name="email"
              control={control}
              rules={rules.email}
              render={({ field }) => (
                <ValidationTextField
                  label="Input Your Email"
                  required
                  variant="outlined"
                  fullWidth
                  size="medium"
                  name="email"
                  type="email"
                  onChange={field.onChange}
                  value={getValues('email')}
                  disabled={false}
                  error={errors['email']?.message !== undefined}
                  helperText={errors['email']?.message}
                  sx={{
                    mb: 4
                  }}
                />
              )}
            />
            <Controller
              name="phone"
              control={control}
              rules={rules.phone}
              render={({ field }) => (
                <ValidationTextField
                  label="Input Your Number Phone"
                  required
                  variant="outlined"
                  fullWidth
                  size="medium"
                  name="phone"
                  type="number"
                  onChange={field.onChange}
                  value={getValues('phone')}
                  disabled={false}
                  error={errors['phone']?.message !== undefined}
                  helperText={errors['phone']?.message}
                  sx={{
                    mb: 4
                  }}
                />
              )}
            />
            <Controller
              name="password"
              control={control}
              rules={rules.password}
              render={({ field }) => (
                <ValidationTextField
                  label="Input Your Password"
                  required
                  variant="outlined"
                  fullWidth
                  size="medium"
                  name="password"
                  type="password"
                  onChange={field.onChange}
                  value={getValues('password')}
                  disabled={false}
                  error={errors['password']?.message !== undefined}
                  helperText={errors['password']?.message}
                  sx={{
                    mb: 4
                  }}
                />
              )}
            />
            <Controller
              name="confirmedPassword"
              control={control}
              rules={{
                ...rules.confirmedPassword,
                validate: {
                  samePassword: v =>
                    v === getValues('password') || 'Mật khẩu không khớp'
                }
              }}
              render={({ field }) => (
                <ValidationTextField
                  label="Input Your Password"
                  required
                  variant="outlined"
                  fullWidth
                  size="medium"
                  name="confirmedPassword"
                  type="password"
                  onChange={field.onChange}
                  value={getValues('confirmedPassword')}
                  disabled={false}
                  error={errors['confirmedPassword']?.message !== undefined}
                  helperText={errors['confirmedPassword']?.message}
                  sx={{
                    mb: 4
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
              to="/signin"
              sx={{ textTransform: 'none', mb: 10, color: 'white', mt: 3 }}
            >
              You have an account? Sign in
            </Button>
          </Box>
        </Container>
      </MainBox>
    </>
  )
}

export default SignupPage
