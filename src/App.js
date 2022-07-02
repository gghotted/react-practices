import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from 'react-router-dom';
import { Button } from '@mui/material';

function One() {
  const navigate = useNavigate();
  return (
    <Button
      onClick={() => {navigate('/two')}}
    >
      Two로 가기
    </Button>
  )
}

function Two() {
  return (
    <div>
      two
    </div>
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
