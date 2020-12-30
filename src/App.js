import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from './components/Navbar'
import Header from './components/Header'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Footer from './components/Footer'
import portfolio from './portfolio.json'
import RepoLinks from './components/Repositories'

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Header />
        <About />
        {portfolio.map( portfolios => <Portfolio key={portfolios.id} {...portfolios}/>)}
        <RepoLinks />
        <Contact />
        <Footer />
      </div>
    </Router>
  );
}

export default App;