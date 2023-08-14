import React, {useEffect} from 'react'
import { useTheme } from "@mui/material/styles"
import useMediaQuery from "@mui/material/useMediaQuery"
import {useLocation, useNavigate} from 'react-router-dom';
import Container from "@mui/material/Container"
import Box from "@mui/material/Box"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import IconButton from "@mui/material/IconButton"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CheckIcon from '@mui/icons-material/Check';
import { home_data_EN, home_data_ES} from '../../utils/information'

function AboutView(props) {

  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo(0, 0);
    };

    scrollToTop();
  }, []);
  let datos

  if(props.data.language === 'ES'){
    datos = home_data_ES
  }else{
    datos = home_data_EN
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
      direction={isDesktop ? "row" : 'column'} 
      spacing={2} 
      sx={{padding: 2, alignItems: 'center', maxWidth:'lg'}}>
        <Stack direction={'column'} sx={{display: 'grid'}}>
        {about_Data?.photos.map((photo)=> (
          <img alt="img" 
          src={`/${photo} `}
          style={{borderRadius: '5px', paddingBottom: '10px'}} 
          width={ isDesktop ? 500 : 400} />
        ))}
        </Stack>
        <Stack direction={"column"}
        rowGap={2} columnGap={2}>
          {about_Data?.description2.map((descript) => {
            return(
              <Stack direction="row" 
              columnGap={2}
              sx={{
                backgroundColor: '#192E47', 
              borderRadius: isDesktop ?  '50px' : '60px', 
              height: isDesktop ? '100px' : '110px', display: 'flex', alignItems: 'center'}}>
                <Box 
                sx={{backgroundColor: 'rgb(217, 217, 217, .2)', 
                borderRadius: '50%', 
                padding: isDesktop ? "0px 24px 0px 24px" : "0px 27px 0px 27px", 
                display: 'flex', alignItems: 'center', height: isDesktop ? '100px' : '110px',}}>
                <CheckIcon fontSize='large' sx={{fontSize: '45px', color: "#fff"}} />

                </Box>
                <Typography variant={isDesktop ? 'body1' : 'body2'} 
                  sx={{color: '#fff', marginRight: 2}}>
                  {`${descript}`}
                </Typography>
              </Stack>
            )
          })}
        </Stack>
        
        
      </Stack>
      </Box>
    </Container>
  )
}

export default AboutView
