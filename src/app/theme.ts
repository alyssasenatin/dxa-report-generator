'use client';

import { Roboto } from 'next/font/google';
import { createTheme } from '@mui/material/styles';
import { buttonClasses, checkboxClasses, radioClasses } from '@mui/material';

import tokens from './tokens';

const { color, palette } = tokens;

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

// Light/dark mode: https://mui.com/material-ui/customization/dark-mode/

// Light theme
const theme = createTheme({
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
        disableRipple: true,
      },
      styleOverrides: {
        root: {
          borderRadius: 100,
          height: 40,
          padding: '10px 24px',
          textTransform: 'none',
          '&:hover': {
            boxShadow:
              '0px 1px 2px 0px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)',
          },
          [`&.${buttonClasses.contained}.${buttonClasses.colorPrimary}`]: {
            '&:hover': {
              backgroundColor: `color-mix(in srgb, ${color.light.primary}, #FFFFFF 8%)`,
            },
            '&:active, &:focus': {
              backgroundColor: `color-mix(in srgb, ${color.light.primary}, #FFFFFF 12%)`,
            },
          },
          [`&.${buttonClasses.contained}.${buttonClasses.colorSecondary}`]: {
            '&:hover': {
              backgroundColor: `color-mix(in srgb, ${color.light.secondaryContainer}, #1D192B 8%)`,
            },
            '&:active, &:focus': {
              backgroundColor: `color-mix(in srgb, ${color.light.secondaryContainer}, #1D192B 12%)`,
            },
          },
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: color.light.onSurfaceVariant,
          height: 48,
          width: 48,
          // TODO： Fix state layer size to 40x40
          [`&.${checkboxClasses.colorPrimary}`]: {
            '&:hover': {
              backgroundColor: `${color.light.onSurface}08`,
              color: color.light.onSurface,
            },
            '&:focus': {
              backgroundColor: `${color.light.onSurface}12`,
              color: color.light.onSurface,
            },
            '&:active': {
              backgroundColor: `${color.light.onSurface}12`,
              color: color.light.onSurface,
            },
          },
          [`&.${checkboxClasses.colorPrimary}.${checkboxClasses.checked}`]: {
            color: color.light.primary,
            '&:hover': {
              backgroundColor: `${palette.primary[30]}08`,
            },
            '&:focus': {
              backgroundColor: `${palette.primary[30]}12`,
            },
            '&:active': {
              backgroundColor: `${palette.primary[30]}12`,
            },
          },
        },
      },
    },
    MuiInputLabel: {
      // TODO: Fix input label hover color
      styleOverrides: {
        root: {
          color: color.light.onSurfaceVariant,
        },
        shrink: {
          backgroundColor: color.light.surfaceContainerLow,
        },
      },
    },
    MuiMenu: {
      styleOverrides: {
        list: {
          backgroundColor: color.light.surfaceContainer,
        },
      },
    },
    MuiMenuItem: {
      defaultProps: {
        disableRipple: true,
      },
      styleOverrides: {
        // TODO: Fix menu item background and hover
        root: {
          height: 56,
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        input: {
          caretColor: 'color.light.primary',
        },
        notchedOutline: {
          borderColor: color.light.outline,
        },
      },
    },
    MuiRadio: {
      defaultProps: {
        disableRipple: true,
      },
      styleOverrides: {
        root: {
          color: color.light.onSurfaceVariant,
          height: 48,
          width: 48,
          // TODO： Fix state layer size to 40x40
          [`&.${radioClasses.colorPrimary}`]: {
            '&:hover': {
              backgroundColor: `${color.light.onSurface}08`,
              color: color.light.onSurface,
            },
            '&:focus': {
              backgroundColor: `${color.light.onSurface}12`,
              color: color.light.onSurface,
            },
            '&:active': {
              backgroundColor: `${palette.primary[30]}12`,
              color: color.light.onSurface,
            },
          },
          [`&.${radioClasses.colorPrimary}.${radioClasses.checked}`]: {
            color: color.light.primary,
            '&:hover': {
              backgroundColor: `${palette.primary[30]}08`,
            },
            '&:focus': {
              backgroundColor: `${palette.primary[30]}12`,
            },
            '&:active': {
              backgroundColor: `${color.light.onSurface}12`,
            },
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        icon: {
          color: color.light.onSurfaceVariant,
        },
      },
    },
  },
  palette: {
    primary: {
      main: color.light.primary,
      contrastText: color.light.onPrimary,
    },
    secondary: {
      // Button secondary
      main: color.light.secondaryContainer,
      contrastText: color.light.onSecondaryContainer,
    },
    error: {
      main: color.light.error,
      contrastText: color.light.onError,
    },
  },
});

export default theme;
