import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
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

const useStyles = makeStyles((theme) => ({
  header: {
    position: 'relative',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  video: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    zIndex: -1,
  },
  videoOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.6)', // Adjust the opacity and color as needed
    zIndex: -1,
  },
  content: {
    position: 'relative',
    zIndex: 1,
    textAlign: 'flex-start',
    display: 'flex',
    color: '#fff',
    flexDirection: 'column',
    marginLeft: '20px'
  },
}));

function Home(props) {
  const classes = useStyles()
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
    "header-p1": props.data.language === 'EN' ? "Bespoke Bond Portfolio" : "Cartera de bonos a la medida",
    "header-p2": props.data.language === 'EN' ? "for High Net Worth Investors" : "para inversores de alto valor neto",
    "header-p3": props.data.language === 'EN' ? "Welcome to Forem Investments LLC, the boutique fixed- income investment firm that specializes in building Al-driven, personalized bond portfolios for High Net Worth Families and Independent Advisors" : "Bienvenido a Forem Investments LLC, la firma boutique de inversiones de renta fija que se especializa en la creación de carteras de bonos personalizadas impulsadas por inteligencia artificial para familias de alto poder adquisitivo y asesores independientes.",
    "primary-action-EN": "Learn more",
    "primary-action-ES": "Ver más",
    ...props.content,
  }

  const theme = useTheme()
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"))

  const video = document.getElementById('headerVideo');
    video.play();

  return (
    <Box sx={{overflowX: 'hidden'}}>
      <header className={classes.header}>
        <video id="headerVideo" className={classes.video} autoPlay muted playsInline loop>
          <source src="\vcompress_3.MOV" type="video/mp4" />
        </video>
        <div className={classes.videoOverlay} />
          <div className={classes.content}>
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
      </header>
      
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
                <img alt='jpm' src='\JPM.png' width={150}/>
              </Grid>
              <Grid item>
                <img alt='usb' src='\USB.png' width={130}/>
              </Grid>
              <Grid item>
                <img alt='ib' src='\IB.png' width={200}/>
              </Grid>
              <Grid item>
                <img alt='rbc' src='\RBC-Logo.png' width={130}/>
              </Grid>
              <Grid item>
                <img alt='pershing' src='\Pershing+Logo.png' width={150}/>
              </Grid>
              <Grid item>
                <img alt='mercantil' src='\mercantil.png' width={150}/>
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