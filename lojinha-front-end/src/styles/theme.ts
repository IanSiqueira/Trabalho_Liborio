import { createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    mode: 'dark', // Ativa o modo escuro
    background: {
      default: '#121212', // Cor do fundo principal
      paper: '#1E1E1E', // Cor do fundo dos componentes
    },
    text: {
      primary: '#ffffff', // Cor do texto principal
      secondary: '#b0b0b0', // Cor do texto secundário
    },
    primary: {
      main: '#BB86FC', // Roxo para destaques
    },
    secondary: {
      main: '#03DAC6', // Verde água para elementos secundários
    },
  },
  typography: {
    fontFamily: '"Roboto", "Arial", sans-serif',
    h4: {
      fontWeight: 700,
      fontSize: '2rem',
      color: '#ffffff', // Texto branco
    },
    body1: {
      fontSize: '1rem',
      color: '#b0b0b0', // Texto secundário em cinza
    },
  },
});

export default darkTheme;
