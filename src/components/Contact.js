import React, {useEffect, useState, useRef} from 'react'
import emailjs from '@emailjs/browser';
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"
import TextField from "@mui/material/TextField"
import Container from "@mui/material/Container"
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import Divider from "@mui/material/Divider"
import Stack from "@mui/material/Stack"
import Alert from "@mui/material/Alert"
import Snackbar from "@mui/material/Snackbar"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import { useTheme } from "@mui/material/styles"
import useMediaQuery from "@mui/material/useMediaQuery"
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import FormInputText from './common/FormInputText'

function Contact(props) {
  const [openSnack, setOpenSnack] = useState(false)
  const [snackMessage, setSnackMessage] = useState(null)
  const form = useRef();

  const handleCloseSnack = (event, reason) => {
    if (reason === "clickaway") {
      return
    }
    setOpenSnack(false)
  }

  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo(0, 0);
    };

    scrollToTop();
  }, []);

  const content = {
    "header-p1": props.data.language === 'ES' ? "Contact us" : "Contáctanos",
    "header-p2": props.data.language === 'ES' ? "No dudes en llamarnos o enviarnos un correo electrónico, o utilice nuestro formulario de contacto para enviarnos un mensaje. ¡Esperamos escuchar de ti!" : "Please feel free to call or email us, or use our contact form to get in touch with us. We look forward to hearing from you!",
    "primary-action": "Learn more",
    ...props.content,
  }
  const defaultValues = {
    email: "",
    name: "",
    about: "",
    message: "",
  }

  const theme = useTheme()
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"))

  const methods = useForm({ defaultValues })
  const { handleSubmit, control } = methods

  {/*const onSubmit = async (data) =>{
    const {
      name,
      email,
      about,
      message,
    } = data
    try {
      let response = await fetch('http://54.147.184.8:8000/api/contact/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      });
  
      if (response.ok) {
        setOpenSnack(true)
        setSnackMessage({
          message: "Form send!",
          color: "success"
        })
      } else {
        setOpenSnack(true)
        setSnackMessage({
          message: "An error has occure, please try again!",
          color: "error"
        })
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }*/}

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_hlx6bhf', 'template_mgkh1bt', form.current, 'zWdAqZe5_WxWx6qXA')
      .then((result) => {
          setSnackMessage({
            message: "Form send!",
            color: "success"
          })
          setOpenSnack(true)
      }, (error) => {
        
        setSnackMessage({
          message: "An error has occure, please try again!",
          color: "error"
        })
        setOpenSnack(true)
      });
  };

  

  return (
    <>
    <Box sx={{ padding: 2, backgroundColor: '#192E47'}}>
      <Container disableGutters maxWidth="lg">
        <Typography 
        variant='h4' 
        color="#fff"
        sx={{textAlign: 'center'}}>
          {`${content["header-p1"]}`}
        </Typography>
        <Typography 
        variant='body1' 
        color="#fff"
        sx={{textAlign: 'center', 
        paddingBottom: 2, 
        paddingTop: 1}}>
          {`${content["header-p2"]}`}
        </Typography>
        <Divider />
        <Stack direction='column' spacing={5} sx={{justifyContent: 'center', display: 'flex', marginTop: 2, marginBottom: 2, alignItems: 'center'}}>
          <Stack direction='row' spacing={2} sx={{width: 230}}>
              <LocalPhoneIcon sx={{color: '#ffff'}}/>
              <Link
                  to="tel:305-462-4267 "
                  style={{ color: "#ffff", textDecoration: "none" }}>
              <Typography variant='body1' sx={{color: '#fff'}}>
              {`+1 (305) 462-4267 `}
              </Typography>
              </Link>
          </Stack>
          <Stack direction='row' spacing={2} sx={{width: 230}}>
              <EmailIcon sx={{color: '#fff'}}/>
              <Link
                  to="mailto:clientservice@foremg.com"
                  style={{ color: "#fff", textDecoration: "none" }}>
              <Typography variant='body1' sx={{color: '#fff'}}>
              {`clientservice@foremg.com`}
              </Typography>
              </Link >
          </Stack>
          <Stack direction='row' spacing={2} sx={{width: 230}}>
              <FmdGoodIcon sx={{color: '#fff'}}/>
              <Link to="https://goo.gl/maps/C6QeCpp11zZ3BRZS6" style={{ color: "#000", textDecoration: "none" }}>
              <Typography variant='body1' sx={{color: '#fff'}}>
                {`4000 Ponce de Leon Suite 470, Miami, FL 33146`}
              </Typography>
              </Link>
          </Stack>
        </Stack>
        </Container>
    </Box>
      <Box sx={{backgroundColor: '#fff', padding: 2}}>
        <Container disableGutters maxWidth='lg'>
      <Divider color="#192E47" sx={{paddingTop: 1}} variant='middle'>
          <Typography variant='h6' color="#192E47">{props.data.language === 'ES' ? "Envíanos un mensaje" : `Send us a message`}</Typography>
        </Divider>
      <Container maxWidth="md" sx={{marginTop: 3}}>
        {/*<Grid container direction={isDesktop ? "row" : "column"} spacing={2} sx={{marginBottom: 2}}>
          <Grid item xs={6}>
            <FormInputText
            name="name"
            control={control}
            label="Name"
            rules={{
              maxLength: {
                value: 48,
                message: "Max length of First Name is 48 characters.",
              },
            }}
            />
          </Grid>
          <Grid item xs={6}>
          <FormInputText
            name="email"
            control={control}
            label="Email"
            rules={{
              maxLength: {
                value: 48,
                message: "Max length of First Name is 48 characters.",
              },
            }}
          />
          </Grid>
        </Grid>
        <Grid container direction="column" spacing={2}>
          <Grid item xs={12}>
          <FormInputText
            name="about"
            control={control}
            label="About"
            rules={{
              maxLength: {
                value: 48,
                message: "Max length of First Name is 48 characters.",
              },
            }}
          />
          </Grid>
          <Grid item xs={12}>
            <FormInputText
              name="message"
              control={control}
              label="Body"
              multiline
              rules={{
                maxLength: {
                  value: 48,
                  message: "Max length of First Name is 48 characters.",
                },
              }}
            />

          </Grid>
        </Grid>
        <Stack 
        sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', margin: 2}}>
        <Button variant="outlined"
         //onClick={handleSubmit(onSubmit)}
         onClick={handleSubmit(sendEmail)}
         sx={{width: isDesktop ? ('30%'): "100%", 
         color: "#192E47", borderColor: '#192E47', 
         "&:hover": {
          color: "#fff", 
          backgroundColor: '#192E47', borderColor: '#192E47'
        }}}>
          {props.data.language === 'ES' ? "Enviar mensaje" : "Send message"}
        </Button>
      </Stack>*/}
      <form ref={form} onSubmit={sendEmail}>
      <Grid container direction={isDesktop ? "row" : "column"} spacing={2} sx={{marginBottom: 2}}>
          <Grid item xs={6}>
          <TextField
        size="small"
        name="user_name"
        fullWidth
        label={"Full Name"}
        variant="outlined"
      />
          </Grid>
          <Grid item xs={6}>
          <TextField
        size="small"
        name="user_email"
        fullWidth
        label={"Email"}
        variant="outlined"
      />
          </Grid>
        </Grid>
        <Grid container direction="column" spacing={2}>
          <Grid item xs={12}>
          <TextField
        size="small"
        name="user_about"
        fullWidth
        label={"About"}
        variant="outlined"
      />
          </Grid>
          <Grid item xs={12}>
          <TextField
            size="small"
            name="message"
            fullWidth
            label={"Body"}
            variant="outlined"
            multiline
            rows={4}
          />
          </Grid>
        </Grid>
        <Stack 
        sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', margin: 2}}>
        <input type="submit" value="Send" 
        style={{width: isDesktop ? ('30%'): "100%", height: '36px',
        backgroundColor: '#192E47', borderRadius: '5px',
         color: "#fff", border: '1px solid #192E47', cursor: 'pointer',
        }} />
      </Stack>
      
    </form>
        </Container>
        <Snackbar
        open={openSnack}
        autoHideDuration={3000}
        onClose={handleCloseSnack}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}>
        <Alert severity={snackMessage?.color} variant="filled">
          {snackMessage?.message}
        </Alert>
      </Snackbar>
      </Container>
      </Box>
    </>
  )
}
export default Contact