
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../Home/home';
import RepositorioList from '../../components/RepositorioList';
import Navbar from '../../components/NavBar';
import Proyectos from '../Proyectos';

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="routes-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/repos" element={<RepositorioList />} />
          <Route path="/mis-proyectos" element={<Proyectos />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
