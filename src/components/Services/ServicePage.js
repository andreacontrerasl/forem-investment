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
      <Box sx={{display: 'flex', justifyContent: 'center'}}>
      <Stack direction={isDesktop ? "row" : "column"} spacing={2} 
      sx={{padding: 2, alignItems: 'center', maxWidth:'lg', display: 'flex', justifyContent: 'center'}}>
        {!isDesktop && <img alt="img" 
        src={service_data?.photo} 
        style={{borderRadius: '10px'}} 
        width={400} />}
        <Stack direction="column" rowGap={2}>
        
        {service_data?.descrition?.map((desc) => {
          return (
            <Stack direction="row" 
              columnGap={2}
              sx={{
                backgroundColor: '#192E47', 
              borderRadius: isDesktop ?  '60px' : '60px', 
              height: isDesktop ? '117px' : '125px', 
              display: 'flex', alignItems: 'center'}}>
                <Box 
                sx={{backgroundColor: 'rgb(217, 217, 217, .2)', 
                borderRadius: '50%', 
                padding: isDesktop ? "0px 36px 0px 36px" : "0px 38px 0px 38px", 
                display: 'flex', alignItems: 'center', height: isDesktop ? '117px' : '125px',}}>
                <>{desc.icon}</>

                </Box>
                <Typography variant={isDesktop ? 'body1' : 'body2'} 
                  sx={{color: '#fff', marginRight: 2}}>
                  {`${desc.text}`}
                </Typography>
              </Stack>)
        })}
        </Stack>
        {isDesktop && <img alt="img" 
        src={service_data?.photo} 
        style={{borderRadius: '10px'}} 
        width={ isDesktop ? 550 : 350} />}
        
      </Stack>
      </Box>
    </Box>
  )
}

export default ServicePage