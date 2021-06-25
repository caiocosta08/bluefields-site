import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './components/pages/HomePage/Home';
import CorporativeLandingPage from './components/pages/CorporativeLandingPage/CorporativeLandingPage'
import Tbb7 from './components/pages/HomePage/Tbb7';


function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route exact path='/' component={CorporativeLandingPage}/>
        <Route path='/facilitadores' exact component={Home}/>
        <Route path='/facilitadores/tbb7' exact component={Tbb7}/>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
