import { Box } from '@mui/system'
import React from 'react'
import { Typography, styled } from '@mui/material'; 

import { navData } from '../../constant/data.js';

const Container = styled(Box)`
    padding: 12px 8px;
    text-align: center
`
const Component = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  margin: '55px 130px 0 130px !important',
  overflowX: 'overlay',
  
  [theme.breakpoints.down('lg')]: {
      margin: '0px !important'
  }
}))

const Text = styled(Typography)`
    font-size: 14px;
    font-weight: 600;
    font-family: inherit;
`;

const NavBar = () => {
  return (
    <Box style={{background: '#fff'}}>
    <Component> 
       {
            
        navData.map(temp => (
          <Container>
              <img src={temp.url} style={{  width: 64 }} />
              <Text>{temp.text}</Text>
          </Container> 
      ))
          

       }
    </Component>
    </Box>

  )
}

export default NavBar