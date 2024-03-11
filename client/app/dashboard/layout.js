'use client'
import { useEffect } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { registerChartJs } from './utils/register-chart-js';
import { theme } from './theme';
import {de} from 'date-fns/locale/de'
import { DashboardLayout } from './components/dashboard-layout';
import {useAppSelector} from '@/lib/hooks'
import { useRouter } from 'next/navigation';
import { SocketProvider } from '../context/SocketContext';
registerChartJs();


const App = ({children}) => {
  const {isAuthorized} = useAppSelector((state) => state.user)
  const router = useRouter()
  useEffect(() => {
    if (!isAuthorized){
      router.push('/')
    }
  },[isAuthorized])
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={de}>
        <ThemeProvider theme = {theme}>
          <CssBaseline />
          <SocketProvider>
            <DashboardLayout>
                {children}
            </DashboardLayout>
          </SocketProvider>
        </ThemeProvider>
      </LocalizationProvider>
    </>
  );
};

export default App;
