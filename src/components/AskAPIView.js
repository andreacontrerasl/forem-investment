import React, {useState} from 'react'
import Box from "@mui/material/Box"
import Stack from "@mui/material/Stack"
import Button from "@mui/material/Button"
import TextField from "@mui/material/TextField"

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
    try {
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
    }
    setLoading(false);
  };

  return (
    <>
      <Box 
      sx={{backgroundColor: "#F2F8FF", 
      width: '100%', 
      minHeight:'80vh',
      justifyContent: 'center', display: 'flex'}}>
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
                placeholder="Please ask to openai"
                variant="outlined"
                multiline
              />
              <Button
                variant="contained"
                onClick={(e) => handleSubmit(e)}
              >
                {loading ? "Generating..." : "Generate"}
              </Button>
          </Stack>
          </Stack>
      </Box>
    </>
  )
}

export default AskAPIView