import React, {useEffect} from 'react'
import { Link} from 'react-router-dom'
import Container from "@mui/material/Container"
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import { useTheme } from "@mui/material/styles"
import useMediaQuery from "@mui/material/useMediaQuery"
import FabComponent from '../common/FabComponent'
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
      <Box sx={{backgroundColor: '#192E47', 
      paddingBottom: 2, 
      display: 'flex', 
      flexDirection: 'column', justifyContent: 'center',}}>
        <Container disableGutters maxWidth='lg'>
        <Typography variant='h4' 
        sx={{color: '#fff', paddingTop: 4, 
        paddingRight: 3, paddingLeft: 3, textAlign: 'start'}}>{info.banner1}</Typography>
        <Grid container 
          direction={ "row"} 
          rowGap={4} 
          columnGap={2}
          sx={{justifyContent: 'center', 
        display: 'flex', marginBottom: 2, paddingLeft: 3, paddingRight: 3, marginTop: 2}}>
            {info.text1.map((service) => (
              <Grid item md={3.7} sm={5} xs={12} >
              <Stack direction='column' 
              sx={{display: 'flex',}}
              >
                <Box sx={{display: 'flex', 
                justifyContent: !isDesktop && 'center'}}>
                  <img alt="img" src={`${service.photo}`} 
                  style={{width: "100%", borderRadius: 5, height: "315px" }}/>
                </Box>
                  <Typography variant='h6' 
                  sx={{color: '#fff', 
                  fontWeight: 'bold', 
                  marginTop: 2, }}>
                  {`${service.titleService}`}
                  </Typography>
                  {service?.description1?.map((desc) => {
                    return (
                      <Typography variant='body1' 
                      sx={{color: '#fff', }}>
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
        </Container>
      </Box>
      </>
    )})}
    <FabComponent language={props.data.language} />
    </>
  )
}

export default Services