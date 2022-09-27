import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { HashLink } from 'react-router-hash-link'
import { AnimatePresence, motion } from 'framer-motion'
import { Box } from '@mui/system'
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp'

export const scrollToTopVariants = {
  hidden: {
    opacity: 0,
    y: -1000
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1
    }
  }
}
const Wrapper = styled(Box)({
  position: 'fixed',
  bottom: '2rem',
  right: '2rem',
  zIndex: '6000',
  '.scrollToTop__button': {
    svg: {
      width: '3rem',
      height: ' 3rem',
      transition: 'all 0.3s linear',
      '&:hover': {
        fill: '#444451;'
      }
    }
  }
})

function ScrollToTop({ to }) {
  const [isShowScrollToTop, setIsShowScrollToTop] = useState(false)
  const scrollHandler = () => {
    if (window.pageYOffset > 450) {
      setIsShowScrollToTop(true)
    } else {
      setIsShowScrollToTop(false)
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', scrollHandler)
  }, [])
  return (
    <Wrapper>
      <AnimatePresence>
        <motion.div
          variants={scrollToTopVariants}
          initial="hidden"
          animate="visible"
          exit={{ opacity: 0, y: -1000, transition: { duration: 1 } }}
          key={isShowScrollToTop}
        >
          {isShowScrollToTop && (
            <HashLink to={`${to}`} className="scrollToTop__button">
              <KeyboardDoubleArrowUpIcon />
            </HashLink>
          )}{' '}
        </motion.div>
      </AnimatePresence>
    </Wrapper>
  )
}

export default ScrollToTop
