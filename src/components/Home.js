import React, {useEffect} from 'react'
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
    "header-p1": props.data.language === 'EN' ? "Bespoke Investment Portfolios" : "Cartera de bonos",
    "header-p2": props.data.language === 'EN' ? "for High Net Worth Investors" : "para Inversionistas de Alto Patrimonio",
    "header-p3": props.data.language === 'EN' ? "Welcome to Forem Investments LLC" : "Bienvenido a Forem Investments LLC",
    "header-p4": props.data.language === 'EN' ? "The fixed-income investment boutique specializing in building Ai-driven, personalized bond portfolios for High Net Worth Families and Independent Advisors." : "La boutique de inversión de renta fija que se especializa en crear carteras de bonos personalizadas impulsadas por IA para familias de alto valor neto y asesores independientes.",
    "primary-action-EN": "Learn more",
    "primary-action-ES": "Ver más",
    ...props.content,
  }

  const theme = useTheme()
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"))

  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo(0, 0);
    };

    scrollToTop();
  }, []);

  return (
    <Box sx={{overflowX: 'hidden'}}>
      <header className={classes.header}>
        <video id="headerVideo" className={classes.video} autoPlay muted loop>
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
              variant={isDesktop ? "h4": "body1"}
              component="span"
              sx={{textShadow: "1px 0px 1px #000", color: "#ffff", width: '90%', fontWeight: 'normal' }}>
              {`${content["header-p3"]} `}
            </Typography>
            <Typography
              variant={isDesktop ? "h5": "body1"}
              component="span"
              sx={{textShadow: "1px 0px 1px #000", color: "#ffff", width: '90%', fontWeight: 'normal' }}>
              {`${content["header-p4"]} `}
            </Typography>
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
      <Box sx={{backgroundColor: '#192E47', paddingBottom: 2}}>
      <Box
      sx={{paddingTop: 3, paddingRight: 3, paddingLeft: 3}}>
        <Stack >
          <Typography
            variant="h4"
            sx={{ 
            color: "#fff", textAlign: !isDesktop && 'center' }}>
            {`${info.title2} `}
          </Typography>
        </Stack>
      </Box>
      <Grid container 
      direction={isDesktop ? 'row' : "column"} 
      spacing={3} 
      sx={{justifyContent: 'center', 
      display: 'flex', 
      padding: 3, marginBottom: 2}}>
          {info.text2.map((service) => (
          <Grid item md={4} xs={6} >
              <Stack direction='column' 
              sx={{display: 'flex', alignItems: !isDesktop && 'center'}}
              >
                <Box sx={{display: 'flex', justifyContent: !isDesktop && 'center', width: '100%'}}>
                  <img alt="img" src={`${service.photo}`} 
                  style={{width: isDesktop ? 370 : '85%', borderRadius: 5, 
                  height: isDesktop ? '290px' : '240px'}}/>
                </Box>
                  <Typography variant='h6' 
                  sx={{color: '#fff', 
                  fontWeight: 'bold', 
                  marginTop: 2, textAlign: !isDesktop && 'center'}}>
                  {`${service.title}`}
                  </Typography>
                  <Typography variant='body1' 
                  sx={{color: '#fff', 
                  textAlign: !isDesktop && 'center'}}>
                  {`${service.description}`}
                  </Typography>
                  <Link to={`/${service.id}`} style={{textDecoration: 'none'}} >
                    <Button variant='outlined'
                    sx={{width: 115, 
                      marginRight: 2,
                      marginTop: 3,
                      textTransform: 'capitalize',
                      color: "#fff", borderColor: "#fff", "&:hover": {
                        color: "#000", 
                        backgroundColor: '#fff', borderColor: '#fff'
                      }}}>
                      {`${service.button}`}
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
      ))}
    </Box>
  )
}

export default Home