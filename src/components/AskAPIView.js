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

const blogInfo = [
  {
    id: 1,
    title: "The Recession Obsession",
    description: "It’s hard to miss the threats to the economy. In the United States, those include banking turmoil, tighter credit, diminished consumer savings, declining corporate profits and rising lay-offs.",
    image: '/Recession.png',
    url: "https://assets.jpmprivatebank.com/content/dam/jpm-wm-aem/campaign/mid-year-outlook/mid-year-outlook-2023.pdf",
    status: true,
  },
  {
    id: 2,
    title: "Balancing act",
    description: "As we approach the second half of 2023, markets are pricing a benign path forward. Implied equity volatility is the lowest since the onset of the pandemic, and the S&P 500 is up 20% from October’s low.",
    image: '/Balancing.png',
    url: "https://drive.google.com/file/d/1MR6yM8Xz9z8HpBKSsRqEpZcsIREAIe5f/view?usp=sharing",
    status: true,
  },
  {
    id: 3,
    title: "Investor's Edge",
    description: "As the average life expectancy continues to climb there’s an increase in the diagnosis of cognitive decline, including Alzheimer’s disease and other forms of dementia.",
    image: '/Investors.png',
    url: "https://drive.google.com/file/d/14KqxI4hoj2tu-9SnR0NuURAHLYvAalwM/view",
    status: true,
  },
]

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


  {/*useEffect(()=> {
    getBlog()
  }, [])*/}

  {/*let getBlog = async() =>{
    let response = await fetch('http://54.147.184.8:8000/api/blog/', {
        method:'GET',
        headers:{
            'Content-Type':'application/json',
        },
    })
    let data = await response.json()

    if(response.status === 200){
      setBlog(data)
    }
  }*/}

  

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
          {blogInfo.map((item) => {
            console.log(item)
            //const imageUrl = item.image
            //const newImageUrl = imageUrl.replace('/blog_images', '');
            return(
              <>
              {item.status && (
                <Grid item md={3} xs={12} sx={{marginLeft: 2, marginRight: 2}}>
                <Card>
                  <CardMedia
                    component="img"
                    height="140"
                    image={item.image}
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