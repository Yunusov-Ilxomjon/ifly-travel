import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Navbar from './components/navbar/Navbar';
import Travel from './components/ekskursiyalar/Travel';
import Country from './components/countries/Country';
import About from './components/about/About';
import Registr from './components/registr/Registr';
import Footer from './components/footer/Footer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <App />
    <Travel />
    <Country />
    <About />
    <Registr />
    <Footer />
  </React.StrictMode>
);


