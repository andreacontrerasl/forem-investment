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
import { about_data_EN, about_data_ES} from '../../utils/information'

function PersonInformation(props) {

  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo(0, 0);
    };

    scrollToTop();
  }, []);
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

  let person_Data

  const data = datos[0].text3

  data.forEach((item) => {
    if(item.id === location.pathname.split("/")[1]){
        person_Data = item
    }
  })

  console.log(person_Data)

  return (
    <Container disableGutters maxWidth >
      <Stack direction="row" spacing={1}
      sx={{backgroundColor: '#2D4080', padding: 2, alignItems: 'center'}}>
        <Container disableGutters maxWidth='lg' sx={{display: 'flex', alignItems: 'center'}}>
        <IconButton onClick={() => navigate(-1)}>
          <ArrowBackIcon sx={{color: '#fff'}} />
        </IconButton>
        <Typography variant='h6' sx={{color: '#fff'}}>
          Meet our team
        </Typography>
        </Container>
      </Stack>
      <Box sx={{display: 'flex', 
      alignItems: 'center', 
      flexDirection: 'column' }}>
      <Box 
      maxWidth="md"
      sx={{display: 'flex', 
      justifyContent: 'center', 
      flexDirection: 'column' }}>
      <Stack direction={isDesktop ? "row" : "column"} spacing={2} 
      sx={{padding: 2, alignItems: 'center', maxWidth:'lg'}}>
        <img alt="img" 
        src={person_Data?.photo} 
        style={{borderRadius: '5px'}} 
        width={ isDesktop ? 360 : 250} />
        <Stack direction="column">
        <Typography variant='h4' sx={{color: '#2A63B0', fontWeight: 'bold', marginTop: 1}}>
          {person_Data.name}
        </Typography>
        <Typography variant='h6' sx={{color: '#606060', fontStyle: 'italic'}}>
          {person_Data.position}
        </Typography>
        </Stack>
      </Stack>
      <Stack direction="column" rowGap={1}
      sx={{marginBottom: 3, paddingLeft: 2, paddingRight: 2}}>
        {person_Data?.description?.map((desc) => {
          return (
            <Typography  sx={{color: '#000', fontSize: '18px'}}>
            {`- ${desc}`}
            </Typography>)
        })}
        </Stack>
      </Box>
      </Box>
    </Container>
  )
}

export default PersonInformation
