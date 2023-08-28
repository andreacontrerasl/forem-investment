import React, { useState, useEffect } from 'react'
import { Link, useLocation} from 'react-router-dom';
import AppBar from "@mui/material/AppBar"
import Stack from "@mui/material/Stack"
import Toolbar from "@mui/material/Toolbar"
import IconButton from "@mui/material/IconButton"
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import MenuIcon from "@mui/icons-material/Menu"
import Button from "@mui/material/Button"
import useMediaQuery from "@mui/material/useMediaQuery"
import { useTheme } from "@mui/material/styles"
import useScrollTrigger from '@mui/material/useScrollTrigger';
import ScrollToColor from './ScrollToColor';
import { HERO_DRAWER_OPTIONS } from './constants'
import DrawerComponent from './DrawerComponent';

function Navbar(props) {
  const [tabValue, setTabValue] = useState("")
  const [openDrawer, setOpenDrawer] = useState(false)
  const theme = useTheme()
  const isDesktop = useMediaQuery(theme.breakpoints.up(1087))

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: props.window ? window() : undefined
  });


  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      setTabValue("Home")
    } else if (location.pathname === "/whyforem") {
      setTabValue("Why Forem")
    } else if (location.pathname === "/services") {
      setTabValue("Our Services")
    } else if (location.pathname === "/askai") {
      setTabValue("Ask AI")
    } else if (location.pathname === "/contact") {
      setTabValue("Contact")
    }
  }, [location.pathname])

  return (
    <ScrollToColor>
    <AppBar
      position={location.pathname=== "/" ? "fixed" : "sticky"}
      sx={{display: 'flex', alignItems: 'center'}}>
      <Container disableGutters maxWidth="100%">
        <Toolbar>
            <Link to="/" style={{textDecoration: 'none'}}>
              <img
                src="\Picture1.png"
                alt="Forem"
                style={{width: isDesktop ? 170 : 120, height: isDesktop ? 70 : 45}}
              />
            </Link>
            {isDesktop ? (
              <>
            <Stack direction='row' sx={{verticalAlign: 'middle', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', width: '100%'}}>
            {HERO_DRAWER_OPTIONS.map((page) => (
                <Link to={page.route} style={{ color: location.pathname === "/" ? ((trigger) ? "#000" : "#fff"): "#000", textDecoration: "none" }}>
                  <Typography
                    key={page.text}
                    sx={{
                      fontWeight: "bold",
                      paddingLeft: 2,
                      paddingRight: 2,
                      color: tabValue === page.text && "#2A63B0"
                    }}>{`${page.text}`}
                  </Typography>
                </Link>
              ))}
              <Link to="https://main.yhlsoft.com/auth/users/sign_in" 
              style={{color: '#fff', textDecoration: 'none'}}>
              <Button variant='outlined'
                sx={{width: 120, 
                textTransform: 'capitalize', 
                color: location.pathname === "/" ? ((trigger) ? "#192E47" : "#fff"): "#192E47", 
                borderColor: location.pathname === "/" ? ((trigger) ? "#192E47" : "#fff"): "#192E47",
                "&:hover": {
                  color: location.pathname === "/" ? ((trigger) ? "#fff" : "#192E47"): "#fff",
                  backgroundColor: location.pathname === "/" ? ((trigger) ? "#192E47" : "#fff"): "#192E47", borderColor: location.pathname === "/" ? ((trigger) ? "#192E47" : "#fff"): "#192E47"
               }}}>Client Login</Button>
              </Link>
              <Typography
                onClick={() => props.data.setLanguage('EN')}
                sx={{
                  fontWeight: "bold",
                  paddingLeft: 2,
                  color: (trigger) ? (props.data.language === 'EN' ? "#000" : "#d5d5d5") : (props.data.language === 'EN' ?(location.pathname === "/" ? "#fff" : "#000") : "#d5d5d5"),
                  cursor: 'pointer'
                }}>ENG
              </Typography>
                <Typography
                sx={{
                  fontWeight: "bold",
                  color: (trigger) ? "#000" : (location.pathname === "/" ? "#fff" : "#000") 
                }}>/</Typography>
                <Typography
                onClick={() => props.data.setLanguage('ES')}
                sx={{
                  fontWeight: "bold",
                  paddingRight: 2,
                  color: (trigger) ? (props.data.language === 'ES' ? "#000" : "#d5d5d5") : (props.data.language === 'ES' ?(location.pathname === "/" ? "#fff" : "#000") : "#d5d5d5"),
                  cursor: 'pointer'
                }}>ESP</Typography>
              
            </Stack>
            </>
            ):(
              <>
              <DrawerComponent
                openDrawer={openDrawer}
                setOpenDrawer={setOpenDrawer}
                tabValue={tabValue}
                language={props.data.language}
                setLanguage={props.data.setLanguage}
              />
              <IconButton
                sx={{ marginLeft: "auto", marginRight: 2, color: (trigger) ? "#000" : location.pathname === "/" ? "#fff" : "#000" }}
                onClick={() => setOpenDrawer(!openDrawer)}>
                <MenuIcon />
              </IconButton>
            </>
            )}
        </Toolbar>
      </Container>
    </AppBar>
    </ScrollToColor>
  )
}

export default Navbar