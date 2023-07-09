import React from 'react'
import {useLocation, useNavigate} from 'react-router-dom';
import Container from "@mui/material/Container"
import Box from "@mui/material/Box"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import IconButton from "@mui/material/IconButton"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { servicesPg_data_EN, servicesPg_data_ES } from '../../utils/information'

function ServicePage(props) {
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

  return (
    <Container disableGutters maxWidth>
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
      <Stack direction="row" spacing={2} 
      sx={{padding: 2, alignItems: 'center', maxWidth:'lg'}}>
        <img src={service_data?.photo} style={{borderRadius: '10px'}} />
        <Stack direction="column">
        {service_data?.descrition?.map((desc) => {
          return (
            <Typography variant='body1' sx={{color: '#000', }}>
            {`- ${desc}`}
            </Typography>)
        })}
        </Stack>
      </Stack>
      </Box>
    </Container>
  )
}

export default ServicePage