"use client"
import { Box, Container, Grid } from '@mui/material';
import { Budget } from './components/dashboard/budget';
import { TasksProgress } from './components/dashboard/tasks-progress';
import { TotalCustomers } from './components/dashboard/total-customers';
import { TotalProfit } from './components/dashboard/total-profit';
import {useAuthContext} from '../context/AuthContext'
import { useSocket } from '../context/SocketContext';
import { useEffect } from 'react';

const Page = () => {
  const auths = useAuthContext()
  console.log(auths, "jbjbjbjhb")
  // console.log(auths.user.email, "jbjbjbjhb")
  const socket = useSocket()
  console.log(socket)
  useEffect(() => {
    socket?.emit("newServiceProvider", auths.user.email);
  }, [socket, auths]);
  return
  (<>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth={false}>
        <Grid
          container
          spacing={3}
        > 
          <Grid item sm = {7}>
            <Grid container spacing = {3}>
              <Grid
                item
                lg={6}
                sm={6}
                xl={6}
                xs={12}
              >
                <Budget />
              </Grid>
              <Grid
                item
                xl={6}
                lg={6}
                sm={6}
                xs={12}
              >
                <TotalCustomers />
              </Grid>
              <Grid
                item
                xl={6}
                lg={6}
                sm={6}
                xs={12}
              >
                <TasksProgress />
              </Grid>
              <Grid
                item
                xl={6}
                lg={6}
                sm={6}
                xs={12}
              >
                <TotalProfit sx={{ height: '100%' }} />
              </Grid>
            </Grid>
          </Grid>
          <Grid item sm = {5}>
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>)
};

export default Page;
