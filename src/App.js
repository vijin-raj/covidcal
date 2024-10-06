import { createTheme, ThemeProvider } from '@mui/material';
import './App.css';
import Dashboard from './layout/home';

function App() {
  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 2500,
             },
    },
  });
  
  return (
    <ThemeProvider theme={theme}>
     <Dashboard/>
    </ThemeProvider>
  );
}

export default App;
