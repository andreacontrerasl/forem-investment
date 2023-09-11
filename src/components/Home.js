import React, {useEffect, useState} from 'react'
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
import FabComponent from './common/FabComponent';
import {home_data_EN, home_data_ES } from '../utils/information'
import { useLoading } from '../context/LoadingContext';
import LoadingComponent from './LoadingComponent';

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
  const [isVideoLoading, setIsVideoLoading] = useState(true);
  const { showLoading, hideLoading, isLoading } = useLoading();

  const handleVideoLoad = () => {
    setIsVideoLoading(false);
  };

  useEffect(() => {
    if(isVideoLoading){
      showLoading()
    }else{
      hideLoading()
    }
  }, [isVideoLoading]);

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
    "header-p1": props.data.language === 'EN' ? "Customized Investment Portfolios" : "Carteras de inversión personalizadas",
    "header-p2": props.data.language === 'EN' ? "for High-Net-Worth Investors" : "para inversionistas de alto patrimonio",
    "header-p3": props.data.language === 'EN' ? "Welcome to Forem Investments LLC" : "Bienvenido a Forem Investments LLC",
    "header-p4": props.data.language === 'EN' ? "Tailored to your financial goals." : "Adaptado a sus metas financieras.",
    "header-p5": props.data.language === 'EN' ? "Built using cutting-edge tools." : "Construido con herramientas de última generación",
    "header-p6": props.data.language === 'EN' ? "Fixed Income investment boutique." : "Boutique de inversión de Renta Fija. ",
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
      <header  style={{position: 'relative',
    height: isDesktop ? '100vh' : '75vh',
    display: 'flex',
    alignItems: 'center',
    overflow: 'hidden',}}>
        <video id="headerVideo" 
        className={classes.video} 
        autoPlay 
        muted loop onLoadedData={handleVideoLoad}>
          <source src="\vcompress_1.MOV" type="video/mp4" />
        </video>
        <div className={classes.videoOverlay} />
        <Container disableGutters maxWidth="lg">
          <div className={classes.content}>
            <Typography
              variant={isDesktop ? "h2": "h4"}
              component="span"
              style={{ fontWeight: "semibold", textShadow: "1px 0px 1px #000", color: "#ffff" }}>
              {`${content["header-p1"]} `}
            </Typography>
            <Typography
              variant={isDesktop ? "h2": "h4"}
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
              {`- ${content["header-p4"]} `}
            </Typography>
            <Typography
              variant={isDesktop ? "h5": "body1"}
              component="span"
              sx={{textShadow: "1px 0px 1px #000", color: "#ffff", width: '90%', fontWeight: 'normal' }}>
              {`- ${content["header-p5"]} `}
            </Typography>
            <Typography
              variant={isDesktop ? "h5": "body1"}
              component="span"
              sx={{textShadow: "1px 0px 1px #000", color: "#ffff", width: '90%', fontWeight: 'normal' }}>
              {`- ${content["header-p6"]} `}
            </Typography>
        </div>
        </Container>
      </header>
      
    {datos.map((info) => (
      <>
      <Box sx={{backgroundColor: '#192E47', paddingBottom: 3}}>
        <Container disableGutters maxWidth="lg">
      <Box
      sx={{padding: 3,}}>
        <Stack >
          <Typography
            variant={isDesktop ? "h4" : 'h5'}
            sx={{ 
            color: "#fff", textAlign: 'center'}}>
            {`${info.title2} `}
          </Typography>
        </Stack>
      </Box>
      <Grid container 
      direction={ 'row' } 
      rowGap={4} 
      columnGap={2}
      sx={{justifyContent: 'center', 
      display: 'flex', marginBottom: 2, paddingLeft: 3, paddingRight: 3}}>
          {info.text2.map((service) => (
          <Grid item md={3.7} sm={5} xs={12}>
              <Stack direction='column' 
              sx={{display: 'flex', }}
              >
                <Box sx={{display: 'flex', 
                justifyContent: !isDesktop && 'center',}}>
                  <img alt="img" src={`${service.photo}`} 
                  style={{width: '100%', borderRadius: 5, 
                  height: isDesktop ? '290px' : '240px'}}/>
                </Box>
                  <Typography variant='h6' 
                  sx={{color: '#fff', 
                  fontWeight: 'bold', 
                  marginTop: 2, }}>
                  {`${service.title}`}
                  </Typography>
                  <Typography variant='body1' 
                  sx={{color: '#fff', }}>
                  {`${service.description}`}
                  </Typography>
              </Stack>
          </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
    <Box sx={{textAlign: 'center', marginTop: 1}}>
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
                <img alt='jpm' src='\JPM.png' width={110}/>
              </Grid>
              <Grid item>
                <img alt='usb' src='\USB.png' width={80}/>
              </Grid>
              <Grid item>
                <img alt='ib' src='\IB.png' width={150}/>
              </Grid>
              <Grid item>
                <img alt='rbc' src='\RBC-Logo.png' width={80}/>
              </Grid>
              <Grid item>
                <img alt='pershing' src='\Pershing+Logo.png' width={110}/>
              </Grid>
              <Grid item>
                <img alt='mercantil' src='\mercantil.png' width={110}/>
              </Grid>
            </Grid>
        </Container>
      </Box>
      </>
      ))}
      <FabComponent language={props.data.language} />
      {isLoading &&
      <LoadingComponent />}
    </Box>
  )
}

export default Home