import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import ShowExp from './components/ShowExp';
import UpdateExp from './components/UpdateExp';
import AddExp from './components/AddExp';
import Navbar from './components/Navbar';

function App() {
  

  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/add' element={<AddExp/>} />
          <Route path='/show/:id' element={<ShowExp/>} />
          <Route path='/update/:id' element={<UpdateExp/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
