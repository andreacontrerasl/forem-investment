import React, {useState} from 'react'
import Box from "@mui/material/Box"
import Stack from "@mui/material/Stack"
import Button from "@mui/material/Button"
import TextField from "@mui/material/TextField"
import Typography from "@mui/material/Typography"

const { Configuration, OpenAIApi } = require("openai");

function AskAPIView(props) {
  const configuration = new Configuration({
    apiKey: process.env.REACT_APP_OPENAI_API_KEY,
  });

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
      <Stack direction={"column"} 
      sx={{backgroundColor: "#F2F8FF", 
      width: '100%', minHeight: '80vh'}}>
        <Typography sx={{textAlign: 'center', marginBottom: 10, marginTop: 10}}>Please ask to Ai any question relevant to your investments needs. </Typography>
       
        <Stack 
        direction="column" 
        spacing={2} 
        sx={{display: 'flex', 
        justifyContent: 'center', 
        width: '100%', alignItems: 'center' }}>
          {apiResponse && (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <pre>
                {apiResponse}
              </pre>
            </Box>
          )}
          
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
                {loading ? "Generating..." : "Generate"}
              </Button>
          </Stack>
          </Stack>
      </Stack>
  )
}

export default AskAPIView