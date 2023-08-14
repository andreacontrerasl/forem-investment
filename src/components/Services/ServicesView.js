import React, {useEffect} from 'react'
import { Link} from 'react-router-dom'
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import { useTheme } from "@mui/material/styles"
import useMediaQuery from "@mui/material/useMediaQuery"
import { servicesPg_data_ES, servicesPg_data_EN} from '../../utils/information'

function Services(props) {

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

  const theme = useTheme()
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"))

  return (
    <>
    {datos.map((info) => {
      const keys = Object.keys(info.text2)
      return(
      <>
      <Box sx={{backgroundColor: '#192E47', paddingBottom: 2}}>
        <Typography variant='h4' 
        sx={{color: '#fff', paddingTop: 4, 
        paddingRight: 3, paddingLeft: 3}}>{info.banner1}</Typography>
        <Grid container 
          direction={isDesktop ? 'row' : "column"} 
          spacing={3} 
          sx={{justifyContent: 'center', 
          display: 'flex', 
          padding: 3, marginBottom: 2}}>
            {info.text1.map((service) => (
              <Grid item md={4} xs={6} >
              <Stack direction='column' sx={{display: 'flex', alignItems: !isDesktop && 'center'}}
              >
                <Box sx={{display: 'flex', justifyContent: !isDesktop && 'center', width: '100%'}}>
                  <img alt="img" src={`${service.photo}`} 
                  style={{width: isDesktop ? 320 : "80%", borderRadius: 5, height: 300 }}/>
                </Box>
                  <Typography variant='h6' 
                  sx={{color: '#fff', 
                  fontWeight: 'bold', 
                  marginTop: 2, textAlign: !isDesktop && 'center'}}>
                  {`${service.titleService}`}
                  </Typography>
                  {service?.description1?.map((desc) => {
                    return (
                      <Typography variant='body1' 
                      sx={{color: '#fff', textAlign: !isDesktop && 'center'}}>
                      {`- ${desc}`}
                      </Typography>)
                  })}
                  <Link to={`/${service.id}`} style={{textDecoration: 'none'}} >
                    <Button variant='outlined'
                    sx={{
                      marginRight: 2,
                      marginTop: 3,
                      textTransform: 'capitalize',
                      color: "#fff", borderColor: "#fff", "&:hover": {
                        color: "#000", 
                        backgroundColor: '#fff', borderColor: '#fff'
                      }}}>
                      {`${service.buttonText}`}
                    </Button>
                  </Link>
              </Stack>
          </Grid>
            ))}

        </Grid>
        
      </Box>
    
    <Box sx={{width: '100%', 
      justifyContent: 'center', 
      alignItems: 'center', 
      display: 'flex', 
      paddingTop: 2, 
      paddingBottom: 2, backgroundColor: '#fff'}}>
        <Link to='/contact' 
        style={{width: '100%', 
        textDecoration: 'none', 
        justifyContent: 'center', 
      alignItems: 'center', 
      display: 'flex', color: "#192E47",  
      "&:hover": {
        color: "#fff", 
       }}}>
        <Button
        variant="outlined"
        sx={{width: isDesktop ? ('30%'): "100%", 
        color: "#192E47", borderColor: '#192E47', 
        "&:hover": {
         color: "#fff", 
         backgroundColor: '#192E47', borderColor: '#192E47'
        }}}>
          {props.data.language === 'EN' ? "Get your own portfolio" : "Consigue tu propio portafolio"}
        </Button>
        </Link>
      </Box>
      
      </>
    )})}
    </>
  )
}

export default Services