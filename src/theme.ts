import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 320,
      sm: 480,
      md: 600,
      lg: 900,
      xl: 1200,
    },
  },
  typography: {
    fontFamily: "'SF Pro Text', -apple-system, BlinkMacSystemFont, sans-serif",
    h6: {
      fontSize: '20px',
      fontWeight: 600,
      color: '#000',
      lineHeight: 1.3,
    },
    body1: {
      fontSize: '16px',
      color: '#000',
      lineHeight: 1.5,
    },
    body2: {
      fontSize: '14px',
      color: '#666',
      lineHeight: 1.5,
    },
    caption: {
      fontSize: '12px',
      color: '#999',
      lineHeight: 1.4,
    },
  },
  palette: {
    primary: {
      main: '#000',
      contrastText: '#FFF',
    },
    secondary: {
      main: '#FFEB3B',
      contrastText: '#000',
    },
    background: {
      default: '#F5F5F5',
      paper: '#FFF',
    },
    divider: '#E0E0E0',
    text: {
      primary: '#000',
      secondary: '#666',
      disabled: '#999',
    },
  },
  shape: {
    borderRadius: 12,
  },
  spacing: 8,
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 500,
          fontSize: '16px',
          padding: '12px 20px',
          borderRadius: '12px',
          transition: 'all 0.2s ease',
          minHeight: '44px',
        },
        contained: {
          boxShadow: 'none',
          '&:hover': {
            boxShadow: 'none',
          },
        },
        outlined: {
          borderWidth: '1px',
          '&:hover': {
            borderWidth: '1px',
          },
        },
      },
      variants: [
        {
          props: { variant: 'outlined' },
          style: {
            borderColor: '#E0E0E0',
            color: '#000',
            backgroundColor: '#FFF',
            '&:hover': {
              backgroundColor: '#F5F5F5',
              borderColor: '#E0E0E0',
            },
          },
        },
      ],
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          padding: '8px',
          borderRadius: '8px',
          transition: 'all 0.2s ease',
        },
        sizeSmall: {
          padding: '6px',
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          borderRadius: '12px !important',
          boxShadow: 'none',
          border: '1px solid #E0E0E0',
          backgroundColor: '#FFF',
          '&:before': {
            display: 'none',
          },
          '&.Mui-expanded': {
            margin: 0,
          },
        },
      },
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          padding: '12px 16px',
          minHeight: 'unset',
          '&.Mui-expanded': {
            minHeight: 'unset',
          },
        },
        content: {
          margin: 0,
          '&.Mui-expanded': {
            margin: 0,
          },
        },
      },
    },
    MuiAccordionDetails: {
      styleOverrides: {
        root: {
          padding: '0 16px 16px',
        },
      },
    },
    MuiSlider: {
      styleOverrides: {
        root: {
          color: '#000',
          height: 8,
          padding: '13px 0',
        },
        thumb: {
          width: 20,
          height: 20,
          backgroundColor: '#000',
          '&:hover, &.Mui-focusVisible': {
            boxShadow: '0 0 0 8px rgba(0, 0, 0, 0.16)',
          },
          '&::before': {
            display: 'none',
          },
        },
        track: {
          height: 8,
          border: 'none',
          borderRadius: 4,
          backgroundColor: '#000',
        },
        rail: {
          height: 8,
          opacity: 1,
          backgroundColor: '#E0E0E0',
          borderRadius: 4,
        },
        mark: {
          width: 2,
          height: 8,
          backgroundColor: '#FFF',
          opacity: 1,
          '&.MuiSlider-markActive': {
            backgroundColor: '#FFF',
            opacity: 1,
          },
        },
        markLabel: {
          display: 'none',
        },
      },
    },
    MuiRadio: {
      styleOverrides: {
        root: {
          color: '#000',
          '&.Mui-checked': {
            color: '#FFEB3B',
          },
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          paddingLeft: '16px',
          paddingRight: '16px',
        },
      },
    },
  },
});

export default theme;
