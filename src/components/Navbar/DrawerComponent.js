import React from "react"
import {Link} from 'react-router-dom';
import Drawer from "@mui/material/Drawer"
import List from "@mui/material/List"
import ListItem from '@mui/material/ListItem';
import ListItemButton from "@mui/material/ListItemButton"
import ListItemText from "@mui/material/ListItemText"
import IconButton from "@mui/material/IconButton"
import CloseIcon from '@mui/icons-material/Close';
import { HERO_DRAWER_OPTIONS2 } from './constants'
import { Typography } from "@mui/material";

function DrawerComponent({ openDrawer, setOpenDrawer, tabValue, language, setLanguage }) {
  const handleDrawerClose = () => {
    setOpenDrawer(false)
  }
  return (
    <Drawer
      open={openDrawer}
      anchor="right"
      onClose={() => setOpenDrawer(false)}>
      <List>
        <ListItem sx={{justifyContent: 'flex-end', display: 'flex'}}>
          <IconButton onClick={handleDrawerClose}>
            <CloseIcon color="#000" />
          </IconButton>
        </ListItem>
        {HERO_DRAWER_OPTIONS2.map((page) => (
          <Link
            to={page.route}
            style={{ color: "#000", textDecoration: "none", }}
            key={page.text}>
            <ListItemButton key={page.text}>
              <ListItemText>
                <Typography sx={{fontWeight: "bold", color: tabValue === page.text && "#2A63B0"}}>
                {`${page.text}`}
                </Typography>
              </ListItemText>
            </ListItemButton>
          </Link>
        ))}
        {language === 'ES' ? (
          <ListItemButton onClick={() => setLanguage('EN')}>
            <ListItemText>
              <Typography sx={{fontWeight: "bold", color:"#000"}}>
              {`EN`}
              </Typography>
            </ListItemText>
          </ListItemButton>
        ): (
          <ListItemButton onClick={() => setLanguage('ES')}>
            <ListItemText>
              <Typography sx={{fontWeight: "bold", color: "#000"}}>
              {`ES`}
              </Typography>
            </ListItemText>
          </ListItemButton>
        )}
      </List>
    </Drawer>
  )
}

export default DrawerComponent