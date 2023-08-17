import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import Stack from "@mui/material/Stack"
import Button from "@mui/material/Button"
import TextField from "@mui/material/TextField"
import Typography from "@mui/material/Typography"
import { useTheme } from "@mui/material/styles"
import useMediaQuery from "@mui/material/useMediaQuery"
import { Card, CardContent, CardMedia } from '@mui/material';

const { Configuration, OpenAIApi } = require("openai");

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

  const configuration = new Configuration({
    apiKey: process.env.REACT_APP_OPENAI_API_KEY,
  });

  useEffect(()=> {
    getBlog()
  }, [])

  let getBlog = async() =>{
    let response = await fetch('http://127.0.0.1:8000/api/blog/', {
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

  const openai = new OpenAIApi(configuration);
  const [prompt, setPrompt] = useState("");
  const [currentPrompt, setCurrentPrompt] = useState("")
  const [apiResponse, setApiResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setPrompt(e.target.value)
    setCurrentPrompt(e.target.value)

  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if(prompt){try {
      const result = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: prompt,
        temperature: 0.5,
        max_tokens: 4000,
      });
      setApiResponse(result.data.choices[0].text);
      setPrompt("")
    } catch (e) {
      console.log(e);
      setApiResponse("Something is going wrong, Please try again.");
    }}
    setLoading(false);
  };

  return (
    <>
      <Stack direction={"column"} 
      sx={{backgroundColor: "#192E47", 
      width: '100%', paddingBottom: 5}}>
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
                    image={`http://127.0.0.1:8000${item.image}`}
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
      </Stack>
      <Stack direction={"column"} 
      sx={{backgroundColor: "#fff", 
      width: '100%', paddingBottom: 10}}>
        <Typography variant={isDesktop ? 'h5': 'h6'}
         sx={{textAlign: 'center', 
        marginBottom: 5, marginTop: 5, color: '#2D4080'}}>
          Please ask Ai any question relevant to your investments needs. 
        </Typography>
       
        <Stack 
        direction="column" 
        spacing={2} 
        sx={{display: 'flex', 
        justifyContent: 'center', 
        width: '100%', alignItems: 'center' }}>
          
          
          <Stack direction="row" spacing={2} 
          sx={{width:'80%'}}>
              <TextField
                onChange={(e) => handleChange(e)}
                value={prompt}
                sx={{width: '85%'}}
                placeholder="Ask to Ai.."
                variant="outlined"
                multiline
              />
              <Button
                variant="contained"
                onClick={(e) => handleSubmit(e)}
                sx={{ 
                  color: "#fff", borderColor: '#192E47', backgroundColor: '#192E47',
                  "&:hover": {
                   color: "#fff", 
                   backgroundColor: '#192E47', borderColor: '#192E47'
                }}}
              >
                {loading ? "Asking..." : "Ask"}
              </Button>
          </Stack>
          {apiResponse && (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                width: '50%'
              }}
            >
              <Typography>
                {apiResponse}
              </Typography>
            </Box>
          )}
          </Stack>
      </Stack>
    </>
  )
}

export default AskAPIView