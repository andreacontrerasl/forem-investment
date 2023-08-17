import React from 'react'
import { useTheme } from "@mui/material/styles"
import useMediaQuery from "@mui/material/useMediaQuery"
import {Link} from 'react-router-dom';
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import CopyrightIcon from "@mui/icons-material/Copyright"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import { HERO_DRAWER_OPTIONS } from '../Navbar/constants'

function FooterView() {
  const theme = useTheme()
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"))
  return (
    <Box sx={{backgroundColor: "#363636", width: '100%', marginTop: 'auto',}}>
    <Grid
      container
      direction={isDesktop ? "row" : "column"}
      sx={{ padding: 1 }}>
        {isDesktop && 
        <Grid item md={2}>
          <Link to="/" style={{textDecoration: 'none'}}>
            <img
              src="\Picture1.png"
              alt="Forem"
              style={{width: 120, height: 45, paddingLeft: '5px'}}
            />
          </Link>
        </Grid>}
      <Grid item md={10} sx={{justifyContent:isDesktop ?  "flex-end" : 'center', display: 'flex', alignContent: 'center'}}>
        <Stack direction="row" spacing={1} sx={{marginTop: !isDesktop && 2}}>
          {HERO_DRAWER_OPTIONS.map((page) => (
            <React.Fragment key={page.text}>
              <Link
                key={page.text}
                to={page.route}
                passHref
                style={{
                  color: "#fff",
                  textDecoration: "none",
                  alignItems: "center",
                  display: "flex",
                  textAlign: 'center'
                }}>
                <Typography
                  key={page.text}
                  variant={isDesktop ? "body2" : "body2"}
                  sx={{
                    color: "#ffff",
                    fontWeight: "bold",
                    paddingRight: isDesktop ? 3 : 1
                  }}>{`${page.text}`}</Typography>
                  </Link>
            </React.Fragment>
          ))}
        </Stack>
      </Grid>
    </Grid>
      <Stack direction='row' spacing={1}>
        
        {isDesktop && 
        <Box sx={{display: 'flex', 
        alignItems: 'center', 
        marginRight: isDesktop && 'auto', paddingLeft: '15px'}}>
          <CopyrightIcon fontSize="sm" 
          sx={{color: '#B1B1B1', 
          paddingTop: !isDesktop && 1, 
          paddingRight: 0.5,}}/>
          <Typography variant='caption' 
          sx={{color: '#B1B1B1', paddingTop: isDesktop ? 0.2 : 1.2}}>
              {`2023 Forem Investments LLC.`}
          </Typography>
        </Box>}
        
        <Box sx={{marginLeft: 'auto', paddingRight: '20px'}}>
          <LinkedInIcon color='white' sx={{cursor: 'pointer', marginRight: '5px'}} />
          <InstagramIcon color='white' sx={{cursor: 'pointer', marginRight: '5px'}} />
          <FacebookIcon color='white' sx={{cursor: 'pointer', marginRight: '5px'}} />
          <TwitterIcon color='white' sx={{cursor: 'pointer', marginRight: '5px'}} />
        </Box>
        
    </Stack>
    <Stack direction={"row"} >
      
      <Box sx={{marginLeft: 2, paddingBottom: 1}}>
        <Link style={{textDecoration: 'none', color: '#B1B1B1'}}
        to="https://docs.google.com/document/d/1-urc_W-HQp4B1bHQwco2csrnCLQNq6DN3tQMAeUBu1Y/edit?usp=sharing">
          <Typography variant='caption' 
          sx={{color: '#B1B1B1', marginRight: 1, cursor: 'pointer'}}>
              {`Private Policy`}
          </Typography>
        </Link>
          <Typography variant='caption' 
          sx={{color: '#B1B1B1', marginRight: 1}}>
              {`|`}
          </Typography>
          <Link style={{textDecoration: 'none', color: '#B1B1B1'}}
        to="https://docs.google.com/document/d/1w-KC-ma46Dh0TSH1inoNWbOgaXC5e7pQwvF1_XfOnCI/edit?usp=sharing">
          <Typography variant='caption' 
          sx={{color: '#B1B1B1', cursor: 'pointer'}}>
              {`ADV`}
        </Typography>
        </Link>
      </Box>
      {!isDesktop && 
        <Box sx={{display: 'flex', 
        alignItems: 'center',  
        marginLeft: 'auto', 
        marginRight: '10px', paddingBottom: 1}}>
          <CopyrightIcon fontSize="sm" 
          sx={{color: '#B1B1B1', 
          paddingRight: 0.5,}}/>
          <Typography variant='caption' 
          sx={{color: '#B1B1B1', }}>
              {`2023 Forem Investments LLC.`}
          </Typography>
        </Box>}
    </Stack>
    </Box>
  )
}

export default FooterView