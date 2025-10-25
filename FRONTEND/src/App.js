import { BrowserRouter,Routes,Route } from 'react-router-dom';
//import { Switch } from "react-router-dom";
import Menswear from './components/menswear';
import Womenswear from './components/womenswear';
import Kidswear from './components/kidswear';
import Accessories from './components/accessories';
import Menu from './components/menu';
import './App.css';
import Home from './components/home';
import About from './components/about';
import Contact from './components/contact';
import Navbar from './components/navbar';

import Frontpage from './components/frontpage';


function App() {
  return (
    <div>
      
      <BrowserRouter>
      
      <Routes>
        <Route path='/menu' element={<Menu />} />
        <Route path='/menswear' element={<Menswear />} />
        <Route path='/womenswear' element={<Womenswear />} />
        <Route path='/kidswear' element={<Kidswear />} />
        <Route path='/accessories' element={<Accessories />} />
        <Route path="/home" element={<Home/>} />
        <Route path="/" element={<Frontpage/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/navbar" element={<Navbar/>} />

        {/* <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/">
            <div>Home Page</div>
          </Route>
        </Switch> */}
      
        
        </Routes>
        
        
        </BrowserRouter>
    </div>
  );
}

export default App;
