import React, {useEffect} from 'react'
import { Link} from 'react-router-dom'
import Container from "@mui/material/Container"
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import { useTheme } from "@mui/material/styles"
import useMediaQuery from "@mui/material/useMediaQuery"
import FabComponent from '../common/FabComponent'
import { about_data_EN, about_data_ES} from '../../utils/information'

function WhyForemView(props) {

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

  return (
    <>
    {datos.map((info) => (
      <>
      <Stack
      direction={"column"} 
      sx={{
      display: 'flex', 
      justifyContent: 'center', 
      backgroundColor: '#182D46', 
      alignItems: 'center', padding: 2}}>
        <Container disableGutters maxWidth="lg" sx={{
      display: 'flex', 
      justifyContent: 'center',  
      alignItems: 'center', padding: 2, flexDirection: 'column'}}>
        <Typography variant={isDesktop ? 'h3' : 'h5'} color={"#fff"} 
        sx={{textAlign: 'center', paddingTop: 1}}>
          {info.title3}
        </Typography>
        <Typography variant='body1' color={"#fff"} 
        sx={{textAlign: 'center', paddingTop: 2, paddingBottom: 4}}>
          {info.text4}
        </Typography>
        <img src={props.data.language === 'EN' ? '/whyforem.webp' : '/whyforemes.webp'} width={isDesktop ? 700: '100%'} />
        </Container>
      </Stack>
      <Box>
        <Container disableGutters maxWidth='lg'>
        <Typography variant={isDesktop ? 'h3' : 'h4'} color="#000" sx={{padding: '20px 0 0 20px'}}>
          {`${info.title2}`}
        </Typography>
        <Typography variant='body1' 
        color="#000"
        sx={{marginTop: 1, padding: '0 20px 20px 20px'}}>
          {`${info.text_random}`}
        </Typography>
        <Grid container 
        direction='row' 
        columnGap={4} 
        rowGap={3}
        sx={{justifyContent: 'center', display: 'flex', 
        marginTop: 2, marginBottom: 2}}>
          {info.text3.map((person) => (
            <Link to={`/${person.id}`} style={{textDecoration: 'none'}}>
            <Grid item md={4} xs={12}
            sx={{display: 'flex'}}>
              <Stack direction='column' 
              sx={{
                  cursor: 'pointer'
                }}>
                  <img alt="img" src={`${person.photo}`} 
                  style={{width: '230px', borderRadius: 5, height:'220px'}}/>
                  <Typography variant='h6' sx={{color: '#000', fontWeight: 'bold'}}>
                  {`${person.name}`}
                  </Typography>
                  <Typography variant='body1' sx={{color: '#000'}}>
                  {`${person.position}`}
                  </Typography>
              </Stack>
            </Grid>
            </Link>
          ))}
        </Grid>
        </Container>
      </Box>
      </>
    ))}
    <FabComponent language={props.data.language} />
    </>
  )
}

export default WhyForemView