import React, {useEffect} from 'react'
import { Link} from 'react-router-dom'
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import Stack from "@mui/material/Stack"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import { useTheme } from "@mui/material/styles"
import useMediaQuery from "@mui/material/useMediaQuery"
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
      backgroundColor: '#192E47', 
      alignItems: 'center', padding: 2}}>
        <Typography variant={isDesktop ? 'h3' : 'h4'} color={"#fff"} 
        sx={{textAlign: 'center', paddingTop: 1}}>
          {info.title3}
        </Typography>
        <Typography variant='body1' color={"#fff"} 
        sx={{textAlign: 'center', paddingTop: 2, paddingBottom: 4}}>
          {info.text4}
        </Typography>
        <img src='/whyforem.jpg' width={isDesktop ? 700: 400} />
      </Stack>
    
      <Box sx={{ padding: 3}}>
        <Typography variant='h3' color="#000">{`${info.title2}`}</Typography>
        <Typography variant='body1' 
        color="#000"
        sx={{marginTop: 1}}>
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
            <Grid item xs={11} md={4}  lg={10} 
            sx={{display: 'flex', justifyContent: 'center'}}>
              <Stack direction='column' 
              sx={{
                  alignItems: "flex-start",
                  display: "flex",
                  cursor: 'pointer'
                }}>
                  <img alt="img" src={`${person.photo}`} 
                  style={{width: 220, borderRadius: 5, height:'216px'}}/>
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
      </Box>
      <Box sx={{width: '100%', 
      justifyContent: 'center', 
      alignItems: 'center', 
      display: 'flex', 
      paddingTop: 2, 
      paddingBottom: 2, backgroundColor: '#192E47'}}>
        <Link to='/contact' 
        style={{width: '100%', 
        textDecoration: 'none', 
        justifyContent: 'center', 
      alignItems: 'center', 
      display: 'flex', color: "#fff",  
      "&:hover": {
        color: "#192E47", 
       }}}>
        <Button
        variant="outlined"
        sx={{width: isDesktop ? ('30%'): "100%", 
        color: "#fff", borderColor: '#fff', 
        "&:hover": {
         color: "#192E47", 
         backgroundColor: '#fff', borderColor: '#ffff'
        }}}>
          Get your own portfolio
        </Button>
        </Link>
      </Box>
      </>
    ))}
    </>
  )
}

export default WhyForemView