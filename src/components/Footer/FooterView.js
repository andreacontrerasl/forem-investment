import React from 'react'
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
  return (
    <Box sx={{backgroundColor: "#363636"}}>
      <Container disableGutters maxWidth='lg'>
        <Grid
            container
            direction="row"
            sx={{ padding: 2 }}>
                <Grid item md={2}>
                    <Link to="/" style={{textDecoration: 'none'}}>
                    <img
                      src="\Picture1.png"
                      alt="Forem"
                      style={{width: 120, height: 45}}
                    />
                    </Link>
                </Grid>
                <Grid item md={10} sx={{justifyContent: "flex-end", display: 'flex', alignContent: 'center'}}>
                <Stack direction="row" spacing={2}>
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
                    }}>
                    <Typography
                      key={page.text}
                      variant="body2"
                      sx={{
                        color: "#ffff",
                        fontWeight: "bold",
                        paddingRight: 3
                      }}>{`${page.text}`}</Typography>
                  </Link>
                </React.Fragment>
              ))}
            </Stack>
                </Grid>
        </Grid>
        <Divider sx={{paddingTop: 2, marginLeft: 2, marginRight: 2}}/>
        <Stack direction='row' spacing={1} sx={{alignItems: 'center', direction: 'flex', padding: "10px 20px 10px 20px"}}>
            <CopyrightIcon fontSize="sm" sx={{color: '#B1B1B1'}}/>
            <Typography variant='caption' sx={{color: '#B1B1B1', paddingTop: 0.2}}>
                {`2023 Forem Investments LLC.`}
            </Typography>
        </Stack>
      </Container>
    </Box>
  )
}

export default FooterView