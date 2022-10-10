import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" exact element={<Home />}></Route>
        <Route path="/about" exact element={<About />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
