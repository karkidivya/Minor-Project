'use client'
import { useEffect } from 'react';
import { registerChartJs } from './utils/register-chart-js';
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
      <SocketProvider>
          <DashboardLayout>
              {children}
          </DashboardLayout>
      </SocketProvider>
    </>
  );
};

export default App;
