import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Container from "@mui/material/Container"
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import Divider from "@mui/material/Divider"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import { useTheme } from "@mui/material/styles"
import useMediaQuery from "@mui/material/useMediaQuery"
import {home_data_EN, home_data_ES } from '../utils/information'

function Home(props) {
  let datos

  let buttonTxt

  if(props.data.language === 'ES'){
    datos = home_data_ES
    buttonTxt = "Leer más"
  }else{
    datos = home_data_EN
    buttonTxt = "Learn more"
  }

  const content = {
    "header-p1": "Bespoke Bond Portfolio",
    "header-p2": "for High Net Worth Investors",
    "header-p3": "Welcome to Forem Investments LLC, the boutique fixed- income investment firm that specializes in building Al-driven, personalized bond portfolios for High Net Worth Families and Independent Advisors",
    "primary-action-EN": "Learn more",
    "primary-action-ES": "Ver más",
    ...props.content,
  }

  const theme = useTheme()
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"))

  return (
    <Box sx={{overflow: 'hidden'}}>
      <div className='main'>
        <div className="overlay"></div>
        <div className="content" style={{width: isDesktop ? "50%" : "80%"}}>
          <Typography
            variant={isDesktop ? "h2": "h3"}
            component="span"
            style={{ fontWeight: "semibold", textShadow: "1px 0px 1px #000", color: "#ffff" }}>
            {`${content["header-p1"]} `}
          </Typography>
          <Typography
            variant={isDesktop ? "h2": "h3"}
            component="span"
            sx={{ fontWeight: "semibold", textShadow: "1px 0px 1px #000", color: "#ffff" }}>
            {`${content["header-p2"]} `}
          </Typography>
          <Typography
            variant={isDesktop ? "body1": "body1"}
            component="span"
            sx={{textShadow: "1px 0px 1px #000", color: "#ffff" }}>
            {`${content["header-p3"]} `}
          </Typography>
          <Link to='/whyforem' style={{textDecoration: 'none'}}>
          <Button variant='outlined' sx={{color: '#fff', textTransform: 'capitalize', borderColor: '#fff', marginTop: 2}}>
            {buttonTxt}
          </Button>
          </Link>
        </div>
    </div>
    {datos.map((info) => (
      <>
      <Box sx={{marginTop: 2, textAlign: 'center', marginBottom: 3}}>
        <Container disableGutters maxWidth="lg">
          <Divider color='#2D4080' sx={{borderColor: '#2D4080'}} style={{color: '#2D4080'}} variant='middle'>
            <Typography variant='h5' color="#192E47">{`${info.title1}`}</Typography>
          </Divider>
            <Grid container columnGap={5} rowGap={1}
            direction="row" 
            sx={{display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center',
            marginTop: 2, padding: 1}}>
              <Grid item>
                <img src='\JPM.png' width={150}/>
              </Grid>
              <Grid item>
                <img src='\USB.png' width={130}/>
              </Grid>
              <Grid item>
                <img src='\IB.png' width={200}/>
              </Grid>
              <Grid item>
                <img src='\RBC-Logo.png' width={130}/>
              </Grid>
              <Grid item>
                <img src='\Pershing+Logo.png' width={150}/>
              </Grid>
              <Grid item>
                <img src='\mercantil.png' width={150}/>
              </Grid>
            </Grid>
        </Container>
      </Box>
      <Box sx={{backgroundColor: '#192E47', padding: 3}}>
          <Typography variant='h3' 
          color="#fff"
          sx={{ marginTop: 1, marginLeft: 2}}>
            {`${info.title2}`}
          </Typography>
        <Container disableGutters maxWidth='lg'>
        <Grid container direction='row' spacing={2} 
        sx={{justifyContent: 'center', 
        display: 'flex', 
        marginTop: 1, 
        marginBottom: 2, }}>
          {info.text2.map((service) => (
            <Grid item md={4}>
              <Stack direction='column' 
              sx={{
                  display: "flex",
                  padding: 2,
                  "&:hover": {
                    transform: "scale(1.01) perspective(0px)",
                    boxShadow: 5,
                    transitionDelay: "0.1s",
                  },
                }}
              spacing={1.5}>
                <Typography variant='h6' sx={{color: '#fff', fontWeight: 'bold'}}>
                {`${service.titleService}`}
                </Typography>
                {service.descrition.map((desc) => {
                    return (
                    <Typography variant='body1' sx={{color: '#fff'}}>
                    {`- ${desc}`}
                    </Typography>)
                })}
                <Link to={`/${service.id}`} style={{textDecoration: 'none'}}>
                <Button variant='outlined'
                sx={{width: 110, 
                  color: '#ffff', 
                  borderColor: '#fff', 
                  marginRight: 2,
                  marginTop: 3,
                  textTransform: 'capitalize'}}>
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
      ))}
    </Box>
  )
}

export default Home