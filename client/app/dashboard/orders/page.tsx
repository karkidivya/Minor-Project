import * as React from 'react';
import { Box } from "@mui/material";
import Orders from './components/Orders';

export default function Home(){

        
    return<>
        <Box
        component="main"
        sx={{
            flexGrow: 1,
            py: 8
        }}
        >   
            <Orders />
        </Box>
  </>
}
