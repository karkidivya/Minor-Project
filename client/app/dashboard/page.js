import Head from 'next/head';
import { Box, Container, Grid } from '@mui/material';
import { Budget } from './components/dashboard/budget';
import { LatestOrders } from './components/dashboard/latest-orders';
import { TasksProgress } from './components/dashboard/tasks-progress';
import { TotalCustomers } from './components/dashboard/total-customers';
import { TotalProfit } from './components/dashboard/total-profit';
import { DashboardLayout } from './components/dashboard-layout';

const Page = () => (
  <>
    <Head>
      <title>
        Dashboard | Material Kit
      </title>
    </Head>
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
            <Grid
              item
              lg={3}
              sm={6}
              xl={3}
              xs={12}
            >
              <Budget />
            </Grid>
            <Grid
              item
              xl={3}
              lg={3}
              sm={6}
              xs={12}
            >
              <TotalCustomers />
            </Grid>
            <Grid
              item
              xl={3}
              lg={3}
              sm={6}
              xs={12}
            >
              <TasksProgress />
            </Grid>
            <Grid
              item
              xl={3}
              lg={3}
              sm={6}
              xs={12}
            >
              <TotalProfit sx={{ height: '100%' }} />
            </Grid>
            <Grid
              item
              xs={12}
            >
              <LatestOrders />
            </Grid>
          </Grid>
        </Container>
      </Box>
  </>
);

// Page.getLayout = (page) => (
//   <DashboardLayout>
//     {page}
//   </DashboardLayout>
// );

export default Page;
