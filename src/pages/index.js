import Layout from "@/Containers/Layout";

import { Container, Grid } from "@mui/material";
import TabPriceList from "@/Components/TabPrice";
import StepperComputerList from "@/Components/StepperComputer";
import HomePhoneNumber from "@/Components/AddPhoneNumber";

export default function Home() {
  return (
    <>
      <Layout>
        <Container maxWidth="xl">
          <Grid display="flex" justifyContent="space-around">
            <HomePhoneNumber />

            <TabPriceList />
          </Grid>


          <Grid mb={20} mt={20}>
            <StepperComputerList/>
          </Grid>
        </Container>
      </Layout>
    </>
  );
}
