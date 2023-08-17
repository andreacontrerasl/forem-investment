import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import Fab from '@mui/material/Fab';
import useMediaQuery from "@mui/material/useMediaQuery"
import { useTheme } from "@mui/material/styles"

function FabComponent({language}) {
    const [showFab, setShowFab] = useState(true);

    const handleScroll = () => {
        const isBottom = window.innerHeight + window.scrollY >= document.body.scrollHeight;
        setShowFab(!isBottom);
    };
    
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    const theme = useTheme()
    const isDesktop = useMediaQuery(theme.breakpoints.up("md"))
  return (
    <>
    {showFab && 
    <Link to={'/contact'} style={{textDecoration: 'none', color: '#000'}}>
    <Fab
      variant="extended"
        sx={{
          position: 'fixed',
          bottom: isDesktop ? '2rem' : '1rem',
          right: isDesktop ? '2rem' : '1rem',
          zIndex: 9999,
          transition: 'opacity 0.3s'
        }}>
        {language === 'EN' ? 'Get your own portfolio' : 'Obten tu portafolio' }
      </Fab>
      </Link>}
      
    </>
  )
}

export default FabComponent
