import logo from './logo.svg';
import './App.css';
import Addtodo from './components/Addtodo';
import Search from './components/Search';
import Delete from './components/Delete';
import Viewall from './components/Viewall';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/'element={<Addtodo/>}/>
      <Route path='/Search'element={<Search/>}/>
      <Route path='/delete'element={<Delete/>}/>
      <Route path='/viewall'element={<Viewall/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
