import { Route, Routes } from 'react-router-dom';
import Home from '../src/pages/Home';
import Detail from './pages/Detail';
import AddTodo from './pages/AddTodo';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/detail" element={<Detail />}></Route>
      <Route path="/add" element={<AddTodo />}></Route>
    </Routes>
  );
}

export default App;
