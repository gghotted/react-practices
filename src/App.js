import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  useLocation,
} from 'react-router-dom';
import { Button } from '@mui/material';

function One() {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <Button
      onClick={() => {
        navigate('/two', {state: {from: location.pathname + location.search}});
      }}
    >
      Two로 가기
    </Button>
  )
}

function Two() {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <Button
      onClick={() => {
        location.state ? navigate(location.state.from) : navigate('/');
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
