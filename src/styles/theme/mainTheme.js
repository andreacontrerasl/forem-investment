import { createTheme } from "@mui/material/styles"

let mainTheme = createTheme({
    typography: {
      fontFamily: "Montserrat, sans-serif",
    },
    palette: {
        primary: { main: "#2A63B0" }, 
        paper: { main: "#2D4080" },
        gray: { main: "#D9D9D9" },
        white: { main: "#fff" },
        background: {
          default: "#fff",
          paper: "#fff",
        },
    },
    components: {
      
      MuiOutlinedInput: {
        defaultProps: {},
        styleOverrides: {
          root: {
            background: "#fff",
          },rderColor: "#1D2639",
          
        },
      },
    },
    
  })

  
  export default mainTheme