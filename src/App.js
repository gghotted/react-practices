import { Container, Typography } from '@mui/material';

function App() {
  return (
    <div>
      <Container sx={{backgroundColor: 'red'}}>
        <Typography color={"primary"} maxWidth={'md'}>md fluid</Typography>
      </Container>
      <Container sx={{backgroundColor: 'blue'}} fixed>
        <Typography color={"primary"} maxWidth={'md'}>md fixed</Typography>
      </Container>
    </div>
  );
}

export default App;
