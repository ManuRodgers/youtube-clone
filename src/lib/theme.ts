import { createTheme } from '@mui/material';
import { red } from '@mui/material/colors';
import { Roboto } from '@next/font/google';
import resolveConfig from 'tailwindcss/resolveConfig';

import { isBrowser } from '@/lib/createEmotionCache';

import tailwindConfigModule from '../../tailwind.config';
const tailwindConfig = resolveConfig(tailwindConfigModule);

const screensConfig = tailwindConfig.theme?.screens;
console.log('screensConfig: ', screensConfig);

export const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
});

let rootElement = null;
if (isBrowser) {
  rootElement = document.getElementById('__next');
}
// Create a theme instance.
const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    warning: {
      main: red[800],
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  components: {
    MuiPopover: {
      defaultProps: {
        container: rootElement,
      },
    },
    MuiPopper: {
      defaultProps: {
        container: rootElement,
      },
    },
  },
});

export default theme;
