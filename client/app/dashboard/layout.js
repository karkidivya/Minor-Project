'use client'
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { registerChartJs } from './utils/register-chart-js';
import { theme } from './theme';
import {de} from 'date-fns/locale/de'
import { DashboardLayout } from './components/dashboard-layout';
registerChartJs();


const App = ({children}) => {

  return (

    <>
      <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={de}>
        <ThemeProvider theme = {theme}>
          <CssBaseline />
          <DashboardLayout>
            {children}
          </DashboardLayout>
        </ThemeProvider>
      </LocalizationProvider>
    </>
  );
};

export default App;
