import { ThemeOptions } from '@material-ui/core/styles/createMuiTheme';

export const themeOptions: ThemeOptions = {
  palette: {
    type: 'light',
    primary: {
      main: '#ff2e63',
      light: '#192259',
      dark: '#0e164d',
    },
    secondary: {
      main: '#f50057',
      light: 'rgba(247,51,120,0)',
    },
    text: {
      primary: '#0E164D',
      secondary: '#0E164D',
      disabled: '#9DA0B8',
      hint: '#FF2E63',
    },
    divider: '#9DA0B8',
  },
  typography: {
    fontFamily: 'inter',
  },
};