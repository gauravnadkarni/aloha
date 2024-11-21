import {createTheme} from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "IBM Plex Mono, Arial, sans-serif", // Set your custom font
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'IBM Plex Mono';
          src: url('./assets/fonts/IBMPlexMono-Regular.ttf') format('truetype');
        }
        @font-face {
          font-family: 'IBM Plex Mono';
          src: url('./assets/fonts/IBMPlexMono-Bold.ttf') format('truetype');
        }
        body {
          font-family: 'IBM Plex Mono', Arial, sans-serif;
        }
      `,
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none", // Disable uppercase transformation
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#FFFFFF", // Your custom color
        },
      },
    },
  },
});

export default theme;
