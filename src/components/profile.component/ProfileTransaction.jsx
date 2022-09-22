import { Avatar, Box, Divider, Typography } from '@mui/material'
import ticketImg from 'src/assets/img/movie.png'
import React from 'react'
import { useState } from 'react'
import format from 'date-format'
import { isToday, isYesterday } from 'src/utils/helper'

export default function ProfileTransaction({ userProfile }) {
  const [isImgLoading, setIsImgLoading] = useState(false)
  return (
    <Box
      sx={{
        width: '100%'
      }}
    >
      {userProfile?.thongTinDatVe.map((item, index) => {
        return (
          <Box mt={2} key={index}>
            <Box
              sx={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                mb: 2
              }}
            >
              <Avatar
                variant="square"
                sx={{
                  width: { xs: 60, sm: 90 },
                  height: { xs: 30, sm: 70 }
                }}
                alt="movie"
                src={ticketImg}
              />
            </Box>
            <Box
              sx={{
                // width: '100%',
                display: 'flex',
                // flexDirection: 'column',
                // alignItems: 'center',
                justifyContent: 'space-between',
                mb: 2
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start'
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    gap: '5px'
                  }}
                >
                  <Typography variant="body1" fontWeight={500}>
                    Ticket code:
                  </Typography>
                  <Typography variant="body1" fontWeight={500} color="orange">
                    {item.maVe}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    gap: '5px'
                  }}
                >
                  <Typography variant="body1" fontWeight={500}>
                    Movie:
                  </Typography>
                  <Typography variant="body1" fontWeight={500} color="orange">
                    {item.tenPhim}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    gap: '5px'
                  }}
                >
                  <Typography variant="body1" fontWeight={500}>
                    Booking date:
                  </Typography>
                  <Typography variant="body1" fontWeight={500} color="error">
                    <span className="highlight__seat">
                      {' '}
                      {format('dd-MM-yyyy', new Date(item.ngayDat))}
                      {isToday(new Date(item.ngayDat))
                        ? ' --  RESERVATION TODAY'
                        : null}
                      {isYesterday(new Date(item.ngayDat))
                        ? ' --  RESERVATION YESTERDAY'
                        : null}
                    </span>
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="body1" fontWeight={500}>
                    Seat:
                  </Typography>
                  <Typography variant="body1">
                    {item.danhSachGhe.map((item, index) => {
                      return (
                        <Box
                          key={index}
                          sx={{
                            display: 'flex',
                            gap: '5px'
                            // marginLeft: '2rem'
                          }}
                        >
                          <Typography
                            variant="body2"
                            fontWeight={500}
                            color="orange"
                          >
                            {item.tenHeThongRap}{' '}
                          </Typography>
                          <Typography
                            variant="body2"
                            fontWeight={500}
                            color="orange"
                          >
                            {' '}
                            || Seat: {item.tenGhe}
                          </Typography>
                        </Box>
                      )
                    })}
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <Avatar
                  src={`https://chart.googleapis.com/chart?chs=200x200&cht=qr&chl=${item.maVe}&choe=UTF-8`}
                  alt="qrCode"
                  onLoad={() => setIsImgLoading(true)}
                  sx={{
                    width: { xs: 75, sm: 150 },
                    height: { xs: 75, sm: 150 },
                    mb: 2
                  }}
                  variant="square"
                />
                <Typography>
                  {isImgLoading ? 'QR CODE FOR TICKET' : 'GENERATING QR CODE'}
                </Typography>
              </Box>
            </Box>
            <Divider />
          </Box>
        )
      })}
    </Box>
  )
}
