import { Container, Grid, Typography } from "@mui/material"
import { NewsProvider } from "./context/NewsProvider"
import Form from "./components/Form"
import NewsList from "./components/NewsList"


function App() {

  return (
    <NewsProvider> 
      
      <Container>
        <header>
          <Typography align="center" marginY={5} component="h1" variant="h3" >
            News Searching Engine
          </Typography>
        </header>

        <Grid
          container
          direction='row'
          justifyContent="center"
          alignItems="center"
        >
          <Grid xs={12} item md={6}>
            <Form />
          </Grid>
        </Grid>

        <NewsList/>
      </Container>

    </NewsProvider> 
  )
}

export default App
