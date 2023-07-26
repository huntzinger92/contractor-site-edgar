import { createTheme } from '@mui/material/styles';

export const backgroundColor = '#f0f0f0';

export const slightlyDarkerBackgroundColor = '#ebebed';

export const contrastingBackgroundColor = '#ffffff';

export const defaultTextColor = '#212121';

// navbar button text
export const secondaryTextColor = '#1f1f1f';

export const disabledButtonTextColor = 'gray';

export const thematicBlue = '#2d3359';

export const thematicBlueBackgroundColor = '#c3ccfa';

export const theme = createTheme({
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor,
          color: defaultTextColor,
          // enabled outlined textfield border
          '&:hover:not($disabled):not($focused):not($error) $notchedOutline':
            {},
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          ':disabled': {
            backgroundColor: '#8a8a8a',
            color: 'black',
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          backgroundColor,
          color: defaultTextColor,
          fontSize: '15px',
          ':hover': {
            color: thematicBlue,
          },
          transition: 'color .4s ease',
        },
        label: {
          cursor: 'pointer',
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          paddingLeft: '0px',
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          color: defaultTextColor,
        },
      },
    },
    MuiList: {
      styleOverrides: {
        root: {
          paddingTop: 0,
          paddingBottom: 0,
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          backgroundColor,
          color: defaultTextColor,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: contrastingBackgroundColor,
          // boxShadow: '0px 0px 5px black',
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: defaultTextColor,
          },
        },
        input: {
          '&:-webkit-autofill': {
            WebkitBoxShadow: `0 0 0 100px ${backgroundColor} inset`,
            WebkitTextFillColor: defaultTextColor,
          },
        },
        notchedOutline: {
          borderColor: defaultTextColor,
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        icon: {
          color: defaultTextColor,
        },
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          color: defaultTextColor,
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          backgroundColor,
          color: defaultTextColor,
        },
      },
    },
  },
  palette: {
    primary: {
      main: defaultTextColor,
    },
  },
  typography: {
    button: {
      textTransform: 'none',
    },
    allVariants: {
      color: defaultTextColor,
    },
    h3: {
      color: thematicBlue,
      textAlign: 'center',
      marginTop: '20px',
      marginBottom: '15px',
    },
  },
});
