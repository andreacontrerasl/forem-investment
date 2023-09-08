import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import Grid from "@mui/material/Grid"
import Container from "@mui/material/Container"
import Stack from "@mui/material/Stack"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import { useTheme } from "@mui/material/styles"
import useMediaQuery from "@mui/material/useMediaQuery"
import { Card, CardContent, CardMedia } from '@mui/material';

function AskAPIView(props) {

  const [blog, setBlog] = useState([])

  const theme = useTheme()
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"))
  
  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo(0, 0);
    };

    scrollToTop();
  }, []);


  useEffect(()=> {
    getBlog()
  }, [])

  let getBlog = async() =>{
    let response = await fetch('http://184.72.150.6:8000/api/blog/', {
        method:'GET',
        headers:{
            'Content-Type':'application/json',
        }
    })
    let data = await response.json()

    if(response.status === 200){
      setBlog(data)
    }

  }

  

  return (
    <>
      <Stack direction={"column"} 
      sx={{backgroundColor: "#192E47", 
      width: '100%', paddingBottom: 5}}>
        <Container disableGutters maxWidth='lg'>
        <Grid container direction={isDesktop ? "row" : "column"}
        rowGap={3} 
        columnGap={2}
        sx={{display: 'flex', justifyContent: 'center', marginTop: 5}}>
          {blog.map((item) => {
            const imageUrl = item.image
            const newImageUrl = imageUrl.replace('/blog_images', '');
            return(
              <>
              {item.status && (
                <Grid item md={3} xs={12} sx={{marginLeft: 2, marginRight: 2}}>
                <Card>
                  <CardMedia
                    component="img"
                    height="140"
                    image={`http://184.72.150.6:8000${item.image}`}
                    alt="PDF Preview"
                  />
                  <CardContent>
                  <Typography  variant="h6" sx={{color: "#2D4080"}}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {`${item.description}`}
                  </Typography>
                  <Link to={item.link}
                  style={{textDecoration: 'none', color: '#2D4080'}}>
                  <Typography variant="body2" 
                  sx={{color: "#2D4080", textAlign: 'end', cursor: 'pointer'}}>
                    Read more</Typography>
                  </Link>
                  </CardContent>
                </Card>
              </Grid>

              )}
              </>
            )
          })}
          
        </Grid>
        </Container>
      </Stack>
      <Stack direction={"column"} 
      sx={{backgroundColor: "#fff", 
      width: '100%', paddingBottom: 10}}>
        <Container disableGutters maxWidth='lg'>
        <Typography variant={isDesktop ? 'h5': 'h6'}
         sx={{textAlign: 'center', 
        marginBottom: 5, marginTop: 5, color: '#2D4080'}}>
          { props.data.language === 'EN' ? `Please ask AI any question relevant to your investments needs. ` : 
          'Por favor, haga a AI cualquier pregunta relevante para sus necesidades de inversión.'}
        </Typography>
       
        <Stack 
        direction="row" 
        spacing={2} 
        sx={{display: 'flex', 
        justifyContent: 'center', 
        width: '100%', alignItems: 'center' }}>
            <Button variant="contained"
            href="https://chat.openai.com/"
              sx={{width: isDesktop ? ('30%'): "100%", 
              color: "#fff", borderColor: '#192E47', 
              backgroundColor: "#192E47",
              }}>
                {props.data.language === 'EN' ? 'Go to ChatGPT' : 'Ir a ChatGPT'}</Button>
            <Button variant="contained"
            href="https://bard.google.com/"
              sx={{width: isDesktop ? ('30%'): "100%", 
              color: "#fff", borderColor: '#192E47', 
              backgroundColor: "#192E47",
              }}>
                {props.data.language === 'EN' ? 'Go to Bard AI' : 'Ir a Bard AI' }</Button>
        </Stack>
        </Container>
      </Stack>
    </>
  )
}

export default AskAPIView