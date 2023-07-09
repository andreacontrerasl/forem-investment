import React from 'react'
import { useTheme } from "@mui/material/styles"
import useMediaQuery from "@mui/material/useMediaQuery"
import {Link} from 'react-router-dom';
import Container from "@mui/material/Container"
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import Divider from "@mui/material/Divider"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import CopyrightIcon from "@mui/icons-material/Copyright"
import { HERO_DRAWER_OPTIONS } from '../Navbar/constants'

function FooterView() {
  const theme = useTheme()
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"))
  return (
    <Box sx={{backgroundColor: "#363636"}}>
    <Grid
      container
      direction={isDesktop ? "row" : "column"}
      sx={{ padding: 2 }}>
        {isDesktop && 
        <Grid item md={2}>
          <Link to="/" style={{textDecoration: 'none'}}>
            <img
              src="\Picture1.png"
              alt="Forem"
              style={{width: 120, height: 45}}
            />
          </Link>
        </Grid>}
      <Grid item md={10} sx={{justifyContent: "flex-end", display: 'flex', alignContent: 'center'}}>
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
    <Divider sx={{paddingTop: 2, marginLeft: 2, marginRight: 2}}/>
      <Stack direction='row' spacing={1} 
      sx={{alignItems: 'center', 
      direction: 'flex', 
      padding: "10px 20px 10px 20px"}}>
        {!isDesktop && 
        <Link to="/" style={{textDecoration: 'none'}}>
          <img
          src="\Picture1.png"
          alt="Forem"
          style={{width: isDesktop ? 120 : 80, height: isDesktop ? 45 : 35}}
          />
        </Link>}
        <CopyrightIcon fontSize="sm" 
        sx={{color: '#B1B1B1', 
        paddingTop: !isDesktop && 1, 
        paddingLeft: !isDesktop && 0.5}}/>
        <Typography variant='caption' sx={{color: '#B1B1B1', paddingTop: isDesktop ? 0.2 : 1.2}}>
            {`2023 Forem Investments LLC.`}
        </Typography>
    </Stack>
    </Box>
  )
}

export default FooterView