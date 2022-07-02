import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  useLocation,
  Link,
} from 'react-router-dom';
import { Box, Button } from '@mui/material';

function One() {
  const location = useLocation();
  return (
    <Box
      component={Link}
      to='/two'
      state={{from: location.pathname + location.search}}
    >
      two로 가기
    </Box>
  )
}

function Two() {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <Button
      onClick={() => {
        location.state ? navigate(-1) : navigate('/');
      }}
    >
      뒤로 가기
    </Button>
  )
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/one" element={<One/>}></Route>
        <Route path="/two" element={<Two/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
