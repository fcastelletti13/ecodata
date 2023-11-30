import './App.css';
import Calculadora from './components/Calculadora';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ConsejosHuellaCarbono from './components/ConsejosHuellaCarbono';
import UserProvider from './context/UserContext';
import Usuario from './components/User';


function App() {
  return ( 
  <UserProvider>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Calculadora />}></Route>
          <Route path='/Consejos' element={<ConsejosHuellaCarbono/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
    <Usuario/>
  </UserProvider>
  )
}

export default App
