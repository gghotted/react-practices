import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams
} from 'react-router-dom';

function Detail() {
  let { id } = useParams();
  return <div>detail {id}</div>
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<div>root</div>}></Route>
        <Route path="/create" element={<div>create</div>}></Route>
        <Route path="/:id" element={<Detail/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
