import React from 'react'
import { Link} from 'react-router-dom'
import Container from "@mui/material/Container"
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import { useTheme } from "@mui/material/styles"
import useMediaQuery from "@mui/material/useMediaQuery"
import { servicesPg_data_ES, servicesPg_data_EN} from '../../utils/information'

function Services(props) {

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
              <Stack direction='column' 
              >
                <Box sx={{display: 'flex', justifyContent: !isDesktop && 'center', width: '100%'}}>
                  <img alt="img" src={`${service.photo}`} 
                  style={{width: isDesktop ? 320 : "80%", borderRadius: 5}}/>
                </Box>
                  <Typography variant='h6' 
                  sx={{color: '#fff', 
                  fontWeight: 'bold', 
                  marginTop: 2, textAlign: !isDesktop && 'center'}}>
                  {`${service.titleService}`}
                  </Typography>
                  {service?.descrition?.map((desc) => {
                    return (
                      <Typography variant='body1' sx={{color: '#fff', }}>
                      {`- ${desc}`}
                      </Typography>)
                  })}
                  <Link to={`/${service.id}`} style={{textDecoration: 'none'}} >
                    <Button variant='outlined'
                    sx={{width: 110, 
                      marginRight: 2,
                      marginTop: 3,
                      textTransform: 'capitalize',
                      color: "#fff", borderColor: "#fff"}}>
                      {`${service.buttonText}`}
                    </Button>
                  </Link>

              </Stack>
          </Grid>
            ))}

        </Grid>
        
      </Box>
    <Stack direction={"column"} spacing={2} sx={{ padding: "30px 60px 30px 60px", color: '#000', backgroundSize: 'cover', }}>
      <Container disableGutters maxWidth>
      <Typography variant='h6' sx={{fontWeight: 'bold', paddingBottom: 2}}>
        {`${info.title2}`}
      </Typography>
      <Typography sx={{paddingBottom: 2}}>
        {`${info.description2}`}
      </Typography>
      {keys.map((key) => {
        return(
                <Grid container direction="colum">
                  <Grid item xs={12}>
                  <Typography variant='body1' sx={{paddingTop: 2, fontWeight: 'bold'}}>
                    {`${key}`}
                  </Typography>
                  </Grid>
                  <Grid item xs={12}>
                  <Typography variant='body2' sx={{paddingTop: 1, color: "#000"}}>
                    {`${info.text2[key]}`}
                  </Typography>

                  </Grid>

                </Grid>
        )
      })}
      </Container>
    </Stack>
      
      </>
    )})}
    </>
  )
}

export default Services