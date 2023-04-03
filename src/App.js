import logo from './logo.svg';
import './App.css';
import { Digitize } from './client1/Digitize1';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import { Home } from './client1/home';


function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route  path='/' element={<Home/>}/>
    </Routes>
    </BrowserRouter>
    </>
   
  );
}

export default App;
