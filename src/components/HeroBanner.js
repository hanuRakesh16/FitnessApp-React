import React from 'react'
import { Box, Stack, Typography, Button } from '@mui/material'
import HeroBannerImage from '../assets/images/banner.png'

const HeroBanner = () => {
  return (
    <Box sx={{
      mt: {lg: '212px', xs: '70px'},
      ml: {xs: '50px'}
    }} position='relative' p='20px'>
      <Typography color="#ff2625" fontWeight="600" fontSize='26px'>
        Fitness Club
      </Typography>
      <Typography fontWeight={700}
      sx={{fontSize: {lg: '44px', xs: '40px'}}}
      >
        Sweat, Smile <br/> and Repeat
      </Typography>
      <Typography fontSize="22px" lineHeight="35px" mb={3}>
        Check out the most effective exeercises
      </Typography>
      <Button variant='contained' color='error' href='#exercises'> 
        Explore Exercises
      </Button>
      <Typography fontWeight={600} color=''>
        Exercise
      </Typography>
      <img src={HeroBannerImage} alt="banner" className='hero-banner-img' />
    </Box>
  )
}

export default HeroBanner