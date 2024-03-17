'use client'
import { useAppSelector } from '@/lib/hooks';
import React, { createContext, useContext, useEffect, useState } from 'react';
import io, { Socket } from 'socket.io-client';

const SocketContext = createContext<Socket | null>(null);

export const useSocket = () => useContext(SocketContext);

export const SocketProvider = ({ children }: {children: React.ReactNode}) => {
  const [socket, setSocket] = useState<Socket | null>(null);
  const {isAuthorized} = useAppSelector((state) => state.user)


  useEffect(()=>{
    const notificationData = { message: 'Hello, world!' }; // Define notificationData
      // socket.emit('sendNotification', {receiverEmail:'karkidivya5@gmail.com' , data : notificationData}); // Pass notificationData with emit
      if (socket != null)
      {
        socket.emit('newServiceProvider', "Divya");
      }
  },[socket])

  useEffect(() => {
    if(isAuthorized){
      const newSocket = io(`${process.env.NEXT_PUBLIC_BACKEND_URL}`);
      setSocket(newSocket);
     
    }
    else{
      socket?.close()
    }
  }, [isAuthorized]);

  return (
    <SocketContext.Provider value={socket}>
      {children}
    </SocketContext.Provider>
  );
};
