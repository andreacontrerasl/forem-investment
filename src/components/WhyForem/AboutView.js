import React from 'react'
import { useTheme } from "@mui/material/styles"
import useMediaQuery from "@mui/material/useMediaQuery"
import {useLocation, useNavigate} from 'react-router-dom';
import Container from "@mui/material/Container"
import Box from "@mui/material/Box"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import IconButton from "@mui/material/IconButton"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { about_data_EN, about_data_ES} from '../../utils/information'

function AboutView(props) {
  let datos

  if(props.data.language === 'ES'){
    datos = about_data_ES
  }else{
    datos = about_data_EN
  }

  const theme = useTheme()
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"))

  const location = useLocation();
  const navigate = useNavigate();

  let about_Data

  const data = datos[0].text2

  data.forEach((item) => {
    if(item.id === location.pathname.split("/")[1]){
        about_Data = item
    }
  })

  return (
    <Container disableGutters maxWidth>
      <Stack direction="row" spacing={1}
      sx={{backgroundColor: '#2D4080', padding: 2, alignItems: 'center'}}>
        <IconButton onClick={() => navigate(-1)}>
          <ArrowBackIcon sx={{color: '#fff'}} />
        </IconButton>
        <Typography variant='h6' sx={{color: '#fff'}}>
          {about_Data.title}
        </Typography>
      </Stack>
      <Box sx={{display: 'flex', justifyContent: 'center'}}>
      <Stack 
      direction={(about_Data?.photos.length > 1 && isDesktop) ? "row" : 'column'} 
      spacing={2} 
      sx={{padding: 2, alignItems: 'center', maxWidth:'lg'}}>
        <Stack direction={'column'} sx={{display: 'grid'}}>
        {about_Data?.photos.map((photo)=> (
          <img alt="img" 
          src={`/${photo} `}
          style={{borderRadius: '10px'}} 
          width={ isDesktop ? 400 : 300} />
        ))}
        </Stack>
        <Typography variant='body1' sx={{color: '#000', textAlign: 'center'}}>
        {`${about_Data?.description2}`}
        </Typography>
        
      </Stack>
      </Box>
    </Container>
  )
}

export default AboutView
