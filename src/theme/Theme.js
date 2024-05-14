import { createTheme } from '@mui/material/styles';

const Theme = createTheme({
  palette: {
    primary: {
      main: '#ff5821',
    },
    secondary: {
      main: '#fff',
    },
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          color:"#fff",
          backgroundColor:"#ff5821",
          fontWeight:700,
          fontSize:"1em",
          '&:hover': {
            backgroundColor: '#fff',
            color : "#ff5821",
            transition: 'background-color 0.3s ease',
          },
        },
      },
      defaultProps: {
        variant: 'contained',
      },
    },
  },

});

export default Theme;
