import { Box, Container } from "@mui/material";
import { CustomerListToolbar } from "../components/customer/customer-list-toolbar";
import { CustomerListResults } from "../components/customer/customer-list-results";
import { customers } from '../__mocks__/customers';

export default function Orders(){
    return<>
            <Box
            component="main"
            sx={{
                flexGrow: 1,
                py: 8
            }}
            >
            <Container maxWidth={false}>
                <CustomerListToolbar />
                <Box sx={{ mt: 3 }}>
                <CustomerListResults customers={customers} />
                </Box>
            </Container>
            </Box>
  </>
}