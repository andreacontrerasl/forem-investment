import React, {useEffect} from 'react'
import { useTheme } from "@mui/material/styles"
import { makeStyles } from '@material-ui/core/styles';
import useMediaQuery from "@mui/material/useMediaQuery"
import {useLocation, useNavigate} from 'react-router-dom';
import Container from "@mui/material/Container"
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import IconButton from "@mui/material/IconButton"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { servicesPg_data_EN, servicesPg_data_ES } from '../../utils/information'

function ServicePage(props) {

  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo(0, 0);
    };

    scrollToTop();
  }, []);

  let datos

  if(props.data.language === 'ES'){
    datos = servicesPg_data_ES
  }else{
    datos = servicesPg_data_EN
  }

  const data = datos[0].text1

  const location = useLocation();
  const navigate = useNavigate();

  let service_data

  data.forEach((item) => {
    if(item.id === location.pathname.split("/")[1]){
      service_data = item
    }
  })

  const theme = useTheme()
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"))

  return (
    <Box width="100%">
      <Stack direction="row" spacing={1}
      sx={{backgroundColor: '#2D4080', padding: 2, alignItems: 'center'}}>
        <IconButton onClick={() => navigate(-1)}>
          <ArrowBackIcon sx={{color: '#fff'}} />
        </IconButton>
        <Typography variant='h6' sx={{color: '#fff'}}>
          {service_data.titleService}
        </Typography>
      </Stack>
      <div  style={{position: 'relative',
      width: '100%',
      height: isDesktop ? '80vh' : '73vh',
      overflow: 'hidden', backgroundColor: 'rgba(0, 0, 0, 0.6)', display: 'flex',
      justifyContent: 'center'}}>
        <div style={{position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundImage: `url(${service_data?.photo})`, 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        opacity: 0.4,}}></div>
          <Container disableGutters 
          sx={{position: 'absolute',
            color: '#fff', height: '100%', display: 'flex', alignItems: 'center'}}>
            <Grid container direction="row" columnGap={4} rowGap={4}
            sx={{display: 'flex', justifyContent: 'center', marginRight: 2, marginLeft: 2}}>
              {service_data?.descrition?.map((desc) => {
                return (
                  <Grid item md={4}
                    sx={{
                      border: '1px solid #fff', 
                      display: 'flex', alignItems: 'center', 
                      padding: '1rem', borderRadius: '20px', 
                      backgroundColor: 'rgb(25, 46, 71, .2)'}}>
                      <Typography variant={'body1'} 
                        sx={{color: '#fff', marginRight: 2}}>
                        {`${desc.text}`}
                      </Typography>
                    </Grid>)
              })}
            </Grid>
          </Container>
        </div>

      
    </Box>
  )
}

export default ServicePage