import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Page1 from './Components/Pages/Page1';
import Home from './Components/Home/Home';
//import Page2 from './Components/Pages/Page2';
import { PageWithParams } from './Components/Pages/PageWithParams';
import { Page2 } from './Components/Pages/Page2';
import Page3 from './Components/Pages/Page3';

function App() {
  return (
    <BrowserRouter>
        <nav>
        <ul>
          <li>
            <Link to={'/page1'}>страница 1</Link>
          </li>
          <li>
            <Link to={'/page2'}>страница 2</Link>
          </li>   
          <li>
            <Link to={'/page3'}>страница 3</Link>
          </li>      
          <li>
            <Link to={'/funky'}>Funky</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path='/' element={<Home />} />
        {/* localhost:3000/page1 */}
        <Route path="page1" element={<Page1 />} /> 
        <Route path="page2" element={<Page2 />} /> 
        <Route path="page3" element={<Page3 name='1' />} /> 
        <Route path="*" element={<span>404</span>} />

        <Route path="page2/:id/:fancy?" element={<PageWithParams />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
