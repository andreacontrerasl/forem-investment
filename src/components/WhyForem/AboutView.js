import React, {useEffect} from 'react'
import { useTheme } from "@mui/material/styles"
import useMediaQuery from "@mui/material/useMediaQuery"
import {useLocation, useNavigate} from 'react-router-dom';
import Container from "@mui/material/Container"
import Box from "@mui/material/Box"
import Stack from "@mui/material/Stack"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import IconButton from "@mui/material/IconButton"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
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
    <Box >
      <Stack direction="row" spacing={1}
      sx={{backgroundColor: '#2D4080', padding: 2, alignItems: 'center'}}>
        <Container disableGutters maxWidth='lg' sx={{display: 'flex', alignItems: 'center'}}>
        <IconButton onClick={() => navigate(-1)}>
          <ArrowBackIcon sx={{color: '#fff'}} />
        </IconButton>
        <Typography variant='h6' sx={{color: '#fff'}}>
          {about_Data.title}
        </Typography>
        </Container>
      </Stack>
      <Box sx={{display: 'flex', justifyContent: 'center', 
      backgroundColor: '#192E47', padding: 2, minHeight:'60vh'}}>
        <Container disableGutters maxWidth='lg'>
      <Stack 
      direction={isDesktop ? "row" : 'column'}  
      sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <Stack direction={'column'} sx={{display: 'grid'}}>
        {about_Data?.photos.map((photo)=> (
          <img alt="img" 
          src={`/${photo} `}
          style={{borderRadius: '5px', paddingBottom: '10px'}} 
          width={ isDesktop ? 500 : '100%'} />
        ))}
        </Stack>
        <Grid container direction={"row"} columnGap={2} rowGap={3}
          sx={{display: 'flex', justifyContent: 'center'}}>
            {about_Data?.description2.map((descript) => {
            return(
              <Grid item md={5} sm={6} xs={12}
              sx={{
                border: '1px solid #fff', 
                display: 'flex', alignItems: 'center', 
                padding: '1rem', borderRadius: '20px', 
                backgroundColor: 'rgb(255, 255, 255, .2)'}}>
                  <Typography variant={'body1' } 
                  sx={{color: '#fff', marginRight: 2}}>
                  {`${descript}`}
                </Typography>
              </Grid>
            )
          })}
        </Grid>
      </Stack>
      </Container>
      </Box>
    </Box>
  )
}

export default AboutView
